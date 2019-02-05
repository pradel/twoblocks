import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import * as blockstack from 'blockstack';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Loader } from './components/Loader';
import { ThemeContext } from './utils/themeContext';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [loggedIn, setLoggedIn] = useState(!!blockstack.isUserSignedIn());
  const [loggingIn, setLoggingIn] = useState(!!blockstack.isSignInPending());

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
        },
        typography: {
          useNextVariants: true,
        },
      }),
    [theme]
  );

  useEffect(() => {
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
  }, [false]);

  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={theme}>
        <CssBaseline />
        {!loggingIn && !loggedIn && <Login />}
        {!loggingIn && loggedIn && <Home setTheme={setTheme} />}
        {loggingIn && <Loader />}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
