import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as blockstack from 'blockstack';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  loginButton: {
    marginTop: theme.spacing.unit * 2,
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.container}>
        <Typography>Looks like you are not logged in</Typography>
        <div>
          <Button
            className={classes.loginButton}
            onClick={() => blockstack.redirectToSignIn()}
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
