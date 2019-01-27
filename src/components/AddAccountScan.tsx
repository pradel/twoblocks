import React, { useState } from 'react';
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import QrReader from 'react-qr-reader';
import * as queryString from 'query-string';
import { File, addAccount } from '../utils/accounts';
import { Loader } from './Loader';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1,
  },
  loadingContainer: {
    marginTop: 56 + theme.spacing.unit * 2,
  },
  errorContainer: {
    marginTop: 56 + theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  container: {
    marginTop: 56,
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
  setFile: (file: File) => void;
}

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

export const AddAccountScan = (props: Props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    props.onClose();
    setLoading(false);
    setError(null);
  };

  const handleError = (error: any) => {
    console.error(error);
    setError(error.message);
    setLoading(false);
  };

  const handleScan = async (scanned: string | null) => {
    if (scanned) {
      setLoading(true);
      const parsed = queryString.parseUrl(scanned);
      // Verify the url is valid
      if (!parsed.url.startsWith('otpauth://') && !parsed.query.secret) {
        alert('Invalid code');
        console.error(parsed);
        setLoading(false);
        return;
      }

      try {
        const parsedUrl = parsed.url.split('/');
        const accountName = parsedUrl[parsedUrl.length - 1];

        const file = await addAccount({
          name: accountName,
          secret: parsed.query.secret as string,
        });

        props.setFile(file);
        props.onClose();
      } catch (error) {
        handleError(error);
      }
    }
  };

  return (
    <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Scan qrcode
          </Typography>
        </Toolbar>
      </AppBar>

      {loading && <Loader className={classes.loadingContainer} />}

      {!loading && error && (
        <Grid container className={classes.errorContainer}>
          <Grid item xs={12}>
            <Typography gutterBottom>Error: {error}</Typography>
            <Typography>Known issues:</Typography>
            <Typography>
              - On IOS 11 it is only supported on Safari and not on Chrome or
              Firefox due to Apple making the API not available to 3rd party
              browsers.
            </Typography>
          </Grid>
        </Grid>
      )}

      {!loading && !error && (
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <QrReader
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
};
