import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { styles } from '../styles';
import { useAuthContext } from '../contexts';

WebBrowser.maybeCompleteAuthSession();

function Login() {
  const { login } = useAuthContext();

  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <TouchableOpacity onPress={() => login()}>
        <Text>Log in / Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
