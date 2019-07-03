import React from 'react';
import { Grid, CircularProgress, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  className?: string;
}

export const Loader = ({ className }: Props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={`${classes.container} ${className}`}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
