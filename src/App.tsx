import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as blockstack from 'blockstack';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Loader } from './components/Loader';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!blockstack.isUserSignedIn());
  const [loggingIn, setLoggingIn] = useState(!!blockstack.isSignInPending());

  useEffect(
    () => {
      if (blockstack.isSignInPending()) {
        blockstack
          .handlePendingSignIn()
          .then(() => {
            setLoggingIn(false);
            setLoggedIn(true);
          })
          .catch((error: any) => {
            setLoggingIn(false);
            alert(error.message);
          });
      }
    },
    [false]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loggingIn && !loggedIn && <Login />}
      {!loggingIn && loggedIn && <Home />}
      {loggingIn && <Loader />}
    </ThemeProvider>
  );
};

export default App;
