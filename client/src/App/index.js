import React from 'react';

import AppContent from './content/AppContent';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
