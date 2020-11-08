import React from 'react';

import Routes from './routes';

import UserContext from './context/UserContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <UserContext.Provider value={{ name: 'Mike' }}>
      <Routes />
    </UserContext.Provider>
  </>
);

export default App;
