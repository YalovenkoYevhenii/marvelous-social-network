import React from 'react';

import { FriendsDashboardPageProvider } from './context';

import FriendsDashboardPageContens from './content/FriendsDashboardPageContens';

const FriendsDashboardPage = () => (
  <FriendsDashboardPageProvider>
    <FriendsDashboardPageContens />

  </FriendsDashboardPageProvider>
);

export default FriendsDashboardPage;
