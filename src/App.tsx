import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as blockstack from 'blockstack';
import { Login } from './components/Login';
import { Home } from './components/Home';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!blockstack.isUserSignedIn());

  useEffect(
    () => {
      if (blockstack.isSignInPending()) {
        // TODO create loader during the promise
        blockstack.handlePendingSignIn().then(() => {
          setLoggedIn(true);
        });
        // TODO catch error
      }
    },
    [false]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!loggedIn && <Login />}
      {loggedIn && <Home />}
    </ThemeProvider>
  );
};

export default App;
