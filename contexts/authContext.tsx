import React, { createContext, useContext } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import * as Google from 'expo-auth-session/providers/google';
import ENV from '../config/env';
import { emptyUser, useUserContext } from './userContext';

const AuthContext = createContext<any>({ email: '', accessToken: '' });

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider(props: any) {
  const { userDetails, setUserDetails } = useUserContext();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: ENV.googleClientId,
  });

  async function fetchUserDetails(accessToken: string) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
      );
      return {
        ...response.data,
        accessToken,
      };
    } catch (error) {
      console.log('fetchUserDetails error', error);
      Alert.alert("Couldn't log in", 'Please try again.');
    }
  }

  async function logout(accessToken: string) {
    if (!accessToken) {
      setUserDetails(emptyUser);
      if (response) response.authentication = null;
      return;
    }
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded',
    };
    try {
      const _ = await axios.post(
        `https://oauth2.googleapis.com/revoke?token=${accessToken}`,
        { headers }
      );
      response.authentication = null;
      setUserDetails(emptyUser);
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        'Error',
        'There was a problem logging out. Please try again.'
      );
    }
  }

  async function googleLogin() {
    if (response && response.authentication) {
      if (response.type === 'success') {
        const accessToken = response.authentication.accessToken;
        try {
          const googleUser = await fetchUserDetails(accessToken);
          const result = await axios.get(
            `${ENV.apiUrl}/users/email/${googleUser.email}`
          );
          const user = await axios.get(`${ENV.apiUrl}/users/${result.data.id}`);
          setUserDetails(user.data);
        } catch (error: any) {
          Alert.alert(
            'Login Error',
            'Please register in the browser or login with a valid user.'
          );
          logout(response.authentication.accessToken);
        }
      }
    }
  }

  const value = {
    getUserDetails: fetchUserDetails,
    request,
    response,
    promptAsync,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

export default AuthProvider;
