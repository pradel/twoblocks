import React, { useContext } from 'react';
import { Typography, Grid, Link, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useWindowSize } from 'the-platform';
import { BlockstackButton } from 'react-blockstack-button';
import { ThemeContext } from '../context/ThemeContext';
import { userSession } from '../utils/blockstack';

const LinkAny: any = Link;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  loginButtonContainer: {
    marginTop: theme.spacing(2),
  },
  loginButton: {
    cursor: 'pointer',
  },
  image: {
    height: 130,
    maxWidth: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

        <div className={classes.loginButtonContainer}>
          <BlockstackButton
            onClick={handleLogin}
            variant={theme === 'light' ? 'blue' : 'light'}
            buttonProps={{ className: classes.loginButton }}
          />
        </div>
      </Grid>
    </Grid>
  );
};
