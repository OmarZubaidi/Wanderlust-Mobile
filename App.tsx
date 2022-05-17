import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, UserProvider, TripProvider } from './contexts';
import { Main } from './components';
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

LogBox.ignoreAllLogs();

export default function App() {
  useFonts({
    Inter_200ExtraLight,
    Inter_400Regular,
    Inter_700Bold,
  });

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
