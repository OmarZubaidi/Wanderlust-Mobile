import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { navigationStyles } from '../styles';
import Tabs from '../Tabs';
import { useUserContext } from '../contexts';

export default function Main() {
  const { userDetails, setUserDetails } = useUserContext();

  return (
    <NavigationContainer theme={navigationStyles}>
      {userDetails?.email ? <Tabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}
