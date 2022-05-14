import React, { useEffect } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { imageStyles, styles, loginStyles, touchableStyles } from '../styles';
import { useAuthContext } from '../contexts';

WebBrowser.maybeCompleteAuthSession();

function Login() {
  const { login, response, promptAsync } = useAuthContext();

  useEffect(() => {
    if (response) {
      login();
    }
  }, [response]);

  return (
    <>
      <ImageBackground
        source={require('../assets/beach.png')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <View style={[styles.container, loginStyles.container]}>
          <Text style={[loginStyles.heading]}>Login</Text>
          <TextInput
            value={''}
            onChangeText={() => {}}
            placeholder={'Username'}
            style={[loginStyles.input]}
          />
          <TextInput
            value={''}
            onChangeText={() => {}}
            placeholder={'Password'}
            secureTextEntry={true}
            style={loginStyles.input}
          />
          <TouchableOpacity
            activeOpacity={touchableStyles}
            style={[loginStyles.button]}
            onPress={() => {}}
          >
            <Text style={[loginStyles.buttonText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={touchableStyles}
          style={[loginStyles.bottomView]}
          onPress={() => promptAsync()}
        >
          <Text style={[loginStyles.bottomText]}>
            Or login through <Text style={[loginStyles.google]}>Google</Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default Login;
