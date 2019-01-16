import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.container}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
