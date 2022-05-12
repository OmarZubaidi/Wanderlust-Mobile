import React, { useContext } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { Alert } from 'react-native';
import axios from 'axios';
import ENV from '../config/env';
import UserContext from './userContext';

const AuthContext = React.createContext();

export const AuthProvider = ( { children } ) =>
{
  const { userEmail, setUserEmail } = useContext( UserContext );
  const [ request, response, promptAsync ] = Google.useAuthRequest( {
    expoClientId: ENV.googleClientId,
  } );

  async function getUserDetails ( accessToken )
  {
    try
    {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${ accessToken }`
      );
      return response.data.email;
    } catch ( error )
    {
      console.log( error );
      Alert.alert( "Couldn't log in", 'Please try again.' );
    }
  }


  async function logout ( token )
  {
    setUserEmail( null );
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded',
    };
    try
    {
      const res = await axios.post(
        `https://oauth2.googleapis.com/revoke?token=${ token }`,
        { headers }
      );
    } catch ( error )
    {
      Alert.alert( error );
    }
  }

  async function login ()
  {
    await promptAsync();
    let email = '';
    if ( response && response.type === 'success' )
    {
      email = await getUserDetails( response.authentication.accessToken );
    }
    try
    {
      const res = await axios.get(
        `https://api-wanderlust-dogs.herokuapp.com/users/email/${ email }`
      );
      setUserEmail( email );
    } catch ( error )
    {
      Alert.alert( 'Please register in the browser or login with a valid user' );
      logout( response.authentication.accessToken );
    }
  }

  /*   useEffect( () =>
    {
    }, [ response ] ); */

  return (
    <AuthContext.Provider value={{ getUserDetails, request, response, promptAsync, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
