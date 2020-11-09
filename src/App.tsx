import React from 'react';

import Routes from './routes';

import { UserProvider } from './hooks/UserContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <UserProvider>
      <Routes />
    </UserProvider>
  </>
);

export default App;
