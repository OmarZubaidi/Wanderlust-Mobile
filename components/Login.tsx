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
import { useAuthContext } from '../contexts';
import { useUserContext } from '../contexts';
import axios from 'axios';

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

  function noGoogleLogin() {
    axios
      .post('https://api-wanderlust-dogs.herokuapp.com/users/login/mobile', {
        email,
        mobilePassword: password,
      })
      .then(response => {
        const id = response.data.id;
        axios
          .get(`https://api-wanderlust-dogs.herokuapp.com/users/${id}`)
          .then(response => {
            const { email, username, Trips, id } = response.data;
            setUserDetails({
              email,
              id,
              username,
              Trips,
              accessToken: null,
            });
          })
          .catch(error => Alert.alert('User info fetch failed'));
      })
      .catch(error => Alert.alert('Login failed, try again'));
  }

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
            value={email}
            onChangeText={setEmail}
            placeholder={'E-mail'}
            style={[loginStyles.input]}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={'PIN'}
            secureTextEntry={true}
            style={loginStyles.input}
          />
          <TouchableOpacity
            activeOpacity={touchableStyles}
            style={[loginStyles.button]}
            onPress={noGoogleLogin}
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
