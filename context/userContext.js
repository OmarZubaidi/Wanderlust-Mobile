import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ( { children } ) =>
{
  const [ userEmail, setUserEmail ] = useState( null );


  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
