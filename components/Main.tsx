import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { navigationStyles } from '../styles';
import Tabs from '../Tabs';
import { useUserContext } from '../contexts';

export default function Main() {
  // TODO bring this back
  // const { userDetails } = useUserContext();

  // TODO
  // ! DELETE THIS
  const userDetails = {
    email: 'test',
  };
  return (
    <NavigationContainer theme={navigationStyles}>
      {userDetails.email ? <Tabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}
