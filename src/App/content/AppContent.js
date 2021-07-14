import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import AppLayout from '../../layouts/AppLayout/AppLayout';

function AppContent() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#257985',
      },
      secondary: {
        main: '#FF4447',
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
