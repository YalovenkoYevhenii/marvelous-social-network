import React from 'react';

import { ProfilePageProvider } from './context';

import ProfilePageContent from './content/ProfilePageContent';

const ProfilePage = () => (
  <ProfilePageProvider>
    <ProfilePageContent />
  </ProfilePageProvider>
);

export default ProfilePage;
