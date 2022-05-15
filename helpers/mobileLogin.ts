import axios from 'axios';
import { Alert } from 'react-native';

export default async function mobileLogin(email, password) {
  const response = await axios.post(
    'https://api-wanderlust-dogs.herokuapp.com/users/login/mobile',
    {
      email,
      mobilePassword: password,
    }
  );
  return response;
}
