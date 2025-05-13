import React, { useState } from 'react';
import type { ReactNode } from 'react'; 
import { UserContext } from './UserContext';


interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
