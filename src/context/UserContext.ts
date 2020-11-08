import { createContext } from 'react';

interface UserContextData {
  name: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export default UserContext;
