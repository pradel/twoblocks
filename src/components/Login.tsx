import React from 'react';
import { Button, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useWindowSize } from 'the-platform';
import * as blockstack from 'blockstack';

const LinkAny: any = Link;

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
  image: {
    height: 130,
    maxWidth: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
}));

export const Login = () => {
  const classes = useStyles();
  const { height } = useWindowSize();

  const handleLogin = () => {
    const origin = window.location.origin;
    blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, [
      'store_write',
    ]);
  };

  return (
    <Grid container style={{ height }}>
      <Grid item xs={12} className={classes.container}>
        <Typography variant="h6">Twoblocks</Typography>

        <img src="/undraw_authentication_fsn5.svg" className={classes.image} />

        <Typography variant="body1">
          Free and{' '}
          <LinkAny
            href="https://github.com/pradel/twoblocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </LinkAny>{' '}
          2fa manager
          <br />
          built with{' '}
          <LinkAny
            href="https://blockstack.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blockstack
          </LinkAny>
        </Typography>

        <div>
          <Button
            className={classes.loginButton}
            onClick={handleLogin}
            variant="outlined"
            color="primary"
          >
            Get started
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
