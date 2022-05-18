import React, { createContext, useContext, useState } from 'react';
import { IUserWithToken } from '../interfaces';

export const emptyUser: IUserWithToken = {
  email: '',
  id: undefined,
  username: '',
  Trips: [],
  accessToken: '',
  sub: '',
  pictureUrl: '',
  emailVerified: false,
};

interface IUserContext {
  userDetails: IUserWithToken;
  setUserDetails: (userDetails: IUserWithToken) => void;
}

const UserContext = createContext<IUserContext>({
  userDetails: emptyUser,
  setUserDetails: () => {},
});

export function useUserContext() {
  return useContext(UserContext);
}

export const UserProvider = (props: any) => {
  const [userDetails, setUserDetails] = useState<IUserWithToken>(emptyUser);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }} {...props} />
  );
};

export default UserProvider;
