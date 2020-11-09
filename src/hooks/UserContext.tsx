import React, { createContext, useCallback, useContext, useState } from 'react';

interface UserState {
  name: string;
}

interface HomeCredentials {
  name: string;
}

interface UserContextData {
  data: UserState | undefined;
  playGame(credentials: HomeCredentials): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserState>(() => {
    return {} as UserState;
  });

  const playGame = useCallback(({ name }) => {
    setData({ name });
  }, []);

  return (
    <UserContext.Provider value={{ data, playGame }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}
