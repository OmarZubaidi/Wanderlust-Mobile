import React, { useEffect, useContext } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { styles } from '../styles';
import AuthContext from '../context/authContext';

WebBrowser.maybeCompleteAuthSession();

interface IProps {
  route: any;
}

function Login({ route }: IProps) {
  const { userEmail, setUserEmail } = route.params;

  const { login, promptAsync } = useContext(AuthContext);

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
