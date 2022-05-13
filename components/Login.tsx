import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { imageStyles, styles, loginStyles } from '../styles';
import { useAuthContext } from '../contexts';

WebBrowser.maybeCompleteAuthSession();

function Login() {
  const { login } = useAuthContext();

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
          <TouchableOpacity style={[loginStyles.button]} onPress={() => {}}>
            <Text style={[loginStyles.buttonText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[loginStyles.bottomView]}
          onPress={() => login()}
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
