import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { imageStyles, styles, loginStyles, touchableStyles } from '../styles';
import { useAuthContext, useUserContext } from '../contexts';
import axios from 'axios';
import ENV from '../config/env';
import { mobileLogin } from '../helpers';

WebBrowser.maybeCompleteAuthSession();

function Login() {
  const { setUserDetails } = useUserContext();
  const { googleLogin, response, promptAsync } = useAuthContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (response) {
      googleLogin();
    }
  }, [response]);

  function emailLogin() {
    if (!email || !password) return;
    mobileLogin(email, password)
      .then((response) => {
        const id = response.data.id;
        axios
          .get(`${ENV.apiUrl}/users/${id}`)
          .then((response) => {
            const { email, username, Trips, id, pictureUrl } = response.data;
            setUserDetails({
              email,
              id,
              username,
              Trips,
              accessToken: null,
              pictureUrl,
            });
          })
          .catch((error) => Alert.alert('Error', 'Failed fetching user data.'));
      })
      .catch((error) => Alert.alert('Login Failed', 'Please try again.'));
  }

  return (
    <>
      <ImageBackground
        source={require('../assets/beach.png')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <View style={[styles.container, loginStyles.container]}>
          <Text style={[loginStyles.heading, styles.fontBold]}>Login</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={'E-mail'}
            style={[loginStyles.input, styles.fontLight]}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={'PIN'}
            secureTextEntry={true}
            style={[loginStyles.input, styles.fontLight]}
          />
          <TouchableOpacity
            activeOpacity={touchableStyles}
            style={[loginStyles.button]}
            onPress={emailLogin}
          >
            <Text style={[loginStyles.buttonText, styles.font]}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={touchableStyles}
          style={[loginStyles.bottomView]}
          onPress={() => promptAsync()}
        >
          <Text style={[loginStyles.bottomText, styles.fontBold]}>
            Or login through <Text style={[loginStyles.google]}>Google</Text>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default Login;
