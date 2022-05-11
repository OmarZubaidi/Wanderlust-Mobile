import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens';
import { navigationStyles } from './styles';
import { AuthProvider } from './context/authContext';
import Tabs from './Tabs';

export default function App() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <AuthProvider>
      <NavigationContainer theme={navigationStyles}>
        <StatusBar style='auto' />
        {userEmail ? <Tabs /> : <LoginScreen setUserEmail={setUserEmail} />}
      </NavigationContainer>
    </AuthProvider>
  );
}
