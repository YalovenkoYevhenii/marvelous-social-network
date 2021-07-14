import React from 'react';

import { SettingsPageProvider } from './context';

import SettingsPageContent from './content/SettingsPageContent';

const SettingsPage = () => (
  <SettingsPageProvider>
    <SettingsPageContent />
  </SettingsPageProvider>
);

export default SettingsPage;
