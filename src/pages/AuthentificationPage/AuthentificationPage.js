import React from 'react';

import { AuthentificationPageProvider } from './context/contextReExport';

import AuthentificationPageContent from './content/AuthentificationPageContent';

const AuthentificationPage = () => (
  <AuthentificationPageProvider>
    <AuthentificationPageContent />
  </AuthentificationPageProvider>
);

export default AuthentificationPage;
