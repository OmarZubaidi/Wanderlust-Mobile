import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, UserProvider } from './contexts';
import { Main } from './components';

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
