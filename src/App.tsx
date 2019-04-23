import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import * as blockstack from 'blockstack';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Loader } from './components/Loader';
import { ThemeContext, themeStorageKey } from './utils/theme';

const App = () => {
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localTheme === 'dark' ? 'dark' : 'light'
  );
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

  const handleChangeTheme = (data: 'light' | 'dark') => {
    setTheme(data);
    localStorage.setItem(themeStorageKey, data);
  };

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
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={theme}>
        <CssBaseline />
        {!loggingIn && !loggedIn && <Login />}
        {!loggingIn && loggedIn && <Home setTheme={handleChangeTheme} />}
        {loggingIn && <Loader />}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
