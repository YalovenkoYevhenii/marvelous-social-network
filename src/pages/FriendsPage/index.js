import React from 'react';
import { FriendsPageProvider } from './context';

import FriendsPageContent from './content/FriendsPageContent';

const FriendsPage = () => (
  <FriendsPageProvider>
    <FriendsPageContent />
  </FriendsPageProvider>
);

export default FriendsPage;
