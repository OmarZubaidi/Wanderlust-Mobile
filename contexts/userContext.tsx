import React, { useContext, useState } from 'react';

const UserContext = React.createContext<any>({
  email: null,
  id: null,
  username: null,
  Trips: [],
  accessToken: null,
});

export function useUserContext() {
  return useContext(UserContext);
}

interface IProps {
  children: any;
}

export const UserProvider = ({ children }: IProps) => {
  const [userDetails, setUserDetails] = useState<any>({
    email: null,
    id: null,
    username: null,
    Trips: [],
    accessToken: null,
  });

  const value = { userDetails, setUserDetails };
  return (
    <UserContext.Provider value={value}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export default UserProvider;
