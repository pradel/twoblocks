import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Login } from './components/Login';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </MuiThemeProvider>
  );
};

export default App;
