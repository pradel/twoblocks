import React from 'react';
import { Theme, Typography, Link, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    maxWidth: '760px',
    margin: '0 auto',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  container: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flex: 1.2,
      paddingRight: theme.spacing(8),
      paddingBottom: theme.spacing(10),
    },
  },
  brandContent: {
    marginBottom: theme.spacing(2),
  },
  screen: {
    flex: 1,
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  screenImage: {
    width: '100%',
    maxWidth: '100%',
  },
}));

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <section className={classes.hero}>
        <div className={classes.container}>
          <div className={classes.brand}>
            <Typography variant="h4" gutterBottom>
              Twoblocks
            </Typography>
            <Typography className={classes.brandContent}>
              Free and{' '}
              <Link
                href="https://github.com/pradel/twoblocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                open source
              </Link>{' '}
              2fa manager built with{' '}
              <Link
                href="https://www.stacks.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stacks
              </Link>
              . Protect yourself online!
            </Typography>
            <Button variant="contained" color="primary" onClick={onLogin}>
              Get started
            </Button>
          </div>
          <div className={classes.screen}>
            <img
              alt="Screenshot of the app"
              src="/img/app_screen.png"
              className={classes.screenImage}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
