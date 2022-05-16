import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, UserProvider, TripProvider } from './contexts';
import { Main } from './components';

LogBox.ignoreAllLogs();

export default function App() {
  // useFonts({ Inter_400Regular });

  return (
    <UserProvider>
      <AuthProvider>
        <TripProvider>
          <StatusBar style='auto' />
          <Main />
        </TripProvider>
      </AuthProvider>
    </UserProvider>
  );
}
