import React from 'react';

import { DashboardPageProvider } from './context';

import { DashboardPageContent } from './content/DashboardPageContent';

const DashboardPage = () => (
  <DashboardPageProvider>
    <DashboardPageContent />
  </DashboardPageProvider>
);

export default DashboardPage;
