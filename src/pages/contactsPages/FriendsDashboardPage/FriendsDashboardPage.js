import React from 'react';

import { FriendsDashboardPageProvider } from './context/contextReExport';

import FriendsDashboardPageContens from './content/FriendsDashboardPageContens';

const FriendsDashboardPage = () => (
  <FriendsDashboardPageProvider>
    <FriendsDashboardPageContens />

  </FriendsDashboardPageProvider>
);

export default FriendsDashboardPage;
