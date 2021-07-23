import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import AppLayout from '../../layouts/AppLayout/AppLayout';

function AppContent() {
  const theme = createTheme({
    overrides: {
      MuiOutlinedInput: {
        adornedEnd: {
          paddingRight: 0,
        },
      },
    },
    palette: {
      primary: {
        main: '#257985',
      },
      secondary: {
        main: '#ff7043',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default AppContent;
