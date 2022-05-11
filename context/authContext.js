import React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { Alert } from 'react-native';
import axios from 'axios';
import ENV from '../config/env';

const AuthContext = React.createContext();

export const AuthProvider = ( { children } ) =>
{

  async function getUserDetails ( accessToken, setUserEmail )
  {
    try
    {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${ accessToken }`
      );
      setUserEmail( response.data.email );
    } catch ( error )
    {
      console.log( error );
      Alert.alert( "Couldn't log in", 'Please try again.' );
    }
  }

  const [ request, response, promptAsync ] = Google.useAuthRequest( {
    expoClientId: ENV.googleClientId,
  } );

  return (
    <AuthContext.Provider value={{ getUserDetails, request, response, promptAsync }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
