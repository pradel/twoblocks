import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Fab,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Add } from '@material-ui/icons';
import { getFile, File } from '../utils/accounts';
import { AccountList } from './AccountList';
import { AddAccount } from './AddAccount';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  container: {
    marginTop: 56,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [file, setFile] = useState<null | File>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(
    () => {
      getFile().then(file => {
        console.log(file);
        setFile(file);
      });
      // TODO catch error
    },
    [false]
  );

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Twoblocks
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container className={classes.container}>
        {!file && (
          <Grid item xs={12} className={classes.loadingContainer}>
            <CircularProgress />
          </Grid>
        )}

        {file && (
          <Grid item xs={12}>
            <AccountList file={file} />
          </Grid>
        )}
      </Grid>

      <AddAccount
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        setFile={setFile}
      />

      {file && (
        <Fab
          className={classes.fab}
          onClick={() => setModalOpen(true)}
          color="primary"
        >
          <Add />
        </Fab>
      )}
    </React.Fragment>
  );
};
