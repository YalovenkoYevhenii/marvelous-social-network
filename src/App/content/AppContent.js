import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout/AppLayout';

function AppContent() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default AppContent;