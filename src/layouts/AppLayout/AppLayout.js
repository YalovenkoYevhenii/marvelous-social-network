import React from 'react';

import { AppLayoutProvider } from './context/contextReExports';

import AppLayoutContent from './content/AppLayoutContent';

const AppLayout = () => (
  <AppLayoutProvider>
    <AppLayoutContent />
  </AppLayoutProvider>
);

export default AppLayout;
