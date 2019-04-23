import React, { useContext } from 'react';
import { Button, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useWindowSize } from 'the-platform';
import { ThemeContext } from '../utils/theme';
import { userSession } from '../utils/blockstack';

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
  const theme = useContext(ThemeContext);

  const handleLogin = () => {
    userSession.redirectToSignIn();
  };

  return (
    <Grid container style={{ height }}>
      <Grid item xs={12} className={classes.container}>
        <Typography variant="h6">Twoblocks</Typography>

        <img
          src="/undraw_authentication_fsn5.svg"
          alt="authentication illustration"
          className={classes.image}
        />

        <Typography variant="body1">
          Free and{' '}
          <LinkAny
            href="https://github.com/pradel/twoblocks"
            target="_blank"
            rel="noopener noreferrer"
            color={theme === 'light' ? 'primary' : 'inherit'}
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
            color={theme === 'light' ? 'primary' : 'inherit'}
          >
            Blockstack
          </LinkAny>
        </Typography>

        <div>
          <Button
            className={classes.loginButton}
            onClick={handleLogin}
            variant="outlined"
            color={theme === 'light' ? 'primary' : 'default'}
          >
            Get started
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
