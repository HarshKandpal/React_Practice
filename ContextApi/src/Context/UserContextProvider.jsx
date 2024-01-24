import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [name, SetUser1] = useState({});

  return (
    <UserContext.Provider value={{ name, SetUser1 }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
