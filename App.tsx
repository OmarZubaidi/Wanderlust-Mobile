import React from 'react';
import Main from './components/Main';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/authContext';
import { UserProvider } from './context/userContext';

export default function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <StatusBar style='auto' />
        <Main />
      </AuthProvider>
    </UserProvider>
  );
}
