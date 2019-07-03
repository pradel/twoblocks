import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Loader } from './components/Loader';
import { ThemeContext, themeStorageKey } from './utils/theme';
import { userSession } from './utils/blockstack';

const App = () => {
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localTheme === 'dark' ? 'dark' : 'light'
  );
  const [loggedIn, setLoggedIn] = useState(!!userSession.isUserSignedIn());
  const [loggingIn, setLoggingIn] = useState(!!userSession.isSignInPending());

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
        },
      }),
    [theme]
  );

  const handleChangeTheme = (data: 'light' | 'dark') => {
    setTheme(data);
    localStorage.setItem(themeStorageKey, data);
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession
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
