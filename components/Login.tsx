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
  const { setUserEmail } = route.params;

  const { getUserDetails, request, response, promptAsync } =
    useContext(AuthContext);

  useEffect(() => {
    if (response && response.type === 'success') {
      getUserDetails(response.authentication.accessToken, setUserEmail);
    }
  }, [response]);

  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <TouchableOpacity onPress={() => promptAsync()}>
        <Text>Log in / Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
