import React from 'react';

import { SettingsPageProvider } from './context/contextReExport';

import SettingsPageContent from './content/SettingsPageContent';

const SettingsPage = () => (
  <SettingsPageProvider>
    <SettingsPageContent />
  </SettingsPageProvider>
);

export default SettingsPage;
