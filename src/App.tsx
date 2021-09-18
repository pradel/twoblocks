import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as Sentry from '@sentry/react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import * as Fathom from 'fathom-client';
import { showConnect } from '@stacks/connect';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Loader } from './components/Loader';
import { ThemeContext, themeStorageKey } from './context/ThemeContext';
import { FileContextProvider } from './context/FileContext';
import { userSession } from './utils/blockstack';
import { Goals } from './utils/fathom';
import { config } from './config';

// Track when page is loaded
const FathomTrack = () => {
  useEffect(() => {
    if (config.fathomSiteId) {
      Fathom.load(config.fathomSiteId);
      Fathom.trackPageview();
    }
  }, []);

  return <React.Fragment />;
};

const App = () => {
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localTheme === 'dark' ? 'dark' : 'light'
  );
  const [loggedIn, setLoggedIn] = useState(!!userSession.isUserSignedIn());
  const [loggingIn, setLoggingIn] = useState(!!userSession.isSignInPending());

  const muiTheme = useMemo(
    () =>
      createTheme({
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

  const handleLogin = useCallback(() => {
    Fathom.trackGoal(Goals.LOGIN, 0);
    showConnect({
      redirectTo: '/',
      appDetails: {
        name: 'Twoblocks',
        icon: 'https://twoblocks.leopradel.com/icon-192x192.png',
      },
      finished: () => {
        setLoggingIn(false);
        setLoggedIn(true);
      },
    });
  }, [setLoggingIn]);

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
        <FathomTrack />
        {!loggingIn && !loggedIn && <Login onLogin={handleLogin} />}
        {!loggingIn && loggedIn && (
          <FileContextProvider>
            <Home setTheme={handleChangeTheme} />
          </FileContextProvider>
        )}
        {loggingIn && <Loader />}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

const FallbackComponent = () => {
  return <div>An error has occurred</div>;
};

const AppWithError = () => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <App />
    </Sentry.ErrorBoundary>
  );
};

export default AppWithError;
