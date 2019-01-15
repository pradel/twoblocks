import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as blockstack from 'blockstack';
import { Login } from './components/Login';

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
        console.log('isSignInPending');
      }
      console.log('effect', loggedIn, blockstack.isUserSignedIn());
    },
    [false]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </MuiThemeProvider>
  );
};

export default App;
