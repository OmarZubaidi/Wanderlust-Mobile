import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { navigationStyles } from '../styles';
import Tabs from '../Tabs';
import UserContext, { UserProvider } from '../context/userContext';

export default function Main() {
  const { userEmail, setUserEmail } = useContext(UserContext);

  return (
    <NavigationContainer theme={navigationStyles}>
      {userEmail ? <Tabs /> : <LoginScreen setUserEmail={setUserEmail} />}
    </NavigationContainer>
  );
}
