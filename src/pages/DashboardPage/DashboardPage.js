import React from 'react';

import { DashboardPageProvider } from './context/contextReExport';

import DashboardPageContent from './content/DashboardPageContent';

const DashboardPage = () => (
  <DashboardPageProvider>
    <DashboardPageContent />
  </DashboardPageProvider>
);

export default DashboardPage;
