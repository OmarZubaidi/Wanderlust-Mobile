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
import { imageStyles, styles, formStyles } from '../styles';
import { useAuthContext } from '../contexts';

WebBrowser.maybeCompleteAuthSession();

function Login() {
  const { login } = useAuthContext();

  return (
    <>
      <ImageBackground
        source={require('../assets/hotel.jpg')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <View
          style={[
            styles.container,
            { alignItems: 'center', justifyContent: 'center' },
          ]}
        >
          <TextInput
            value={''}
            onChangeText={() => {}}
            placeholder={'Username'}
            style={formStyles.input}
          />
          <TextInput
            value={''}
            onChangeText={() => {}}
            placeholder={'Password'}
            secureTextEntry={true}
            style={formStyles.input}
          />
          <TouchableOpacity style={formStyles.button} onPress={() => {}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={formStyles.google} onPress={() => login()}>
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
          >
            Or Sign in with <Text style={{ color: 'blue' }}>Google</Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default Login;
