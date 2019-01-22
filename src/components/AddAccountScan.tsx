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
import { SlideProps } from '@material-ui/core/Slide';
import { ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import QrReader from 'react-qr-reader';
import { File } from '../utils/accounts';
import { Loader } from './Loader';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1,
  },
  loadingContainer: {
    marginTop: 56 + theme.spacing.unit * 2,
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

function Transition(props: SlideProps) {
  return <Slide direction="up" {...props} />;
}

export const AddAccountScan = (props: Props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleScan = (code: string | null) => {
    if (code) {
      setLoading(true);
      alert(code);
      // TODO save code
    }
  };

  const handleError = (error: any) => {
    alert(error.message);
  };

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={props.onClose}
            aria-label="Close"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Scan qrcode
          </Typography>
        </Toolbar>
      </AppBar>

      {loading && <Loader className={classes.loadingContainer} />}

      {!loading && (
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
