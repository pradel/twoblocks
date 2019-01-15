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
import * as blockstack from 'blockstack';
import { getFile, File } from '../utils/accounts';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
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

  useEffect(
    () => {
      getFile().then(file => {
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

      <Grid container spacing={24} className={classes.container}>
        {!file && (
          <Grid item xs={12} className={classes.loadingContainer}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>

      {file && (
        <Fab className={classes.fab}>
          <Add />
        </Fab>
      )}
    </React.Fragment>
  );
};
