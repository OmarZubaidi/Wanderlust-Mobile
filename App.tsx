import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens';
import Tabs from './Tabs';
import colors from './styles/colors';

export default function App() {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <NavigationContainer
      theme={{ colors: { background: 'white', borderTopColor: 'white' } }}
    >
      <StatusBar style='auto' />
      {userEmail ? <Tabs /> : <LoginScreen setUserEmail={setUserEmail} />}
    </NavigationContainer>
  );
}
