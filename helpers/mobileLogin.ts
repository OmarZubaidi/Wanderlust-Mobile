import axios from 'axios';
import ENV from '../config/env';

export default async function mobileLogin(email: string, password: string) {
  const response = await axios.post(`${ENV.apiUrl}/users/login/mobile`, {
    email,
    mobilePassword: password,
  });
  return response;
}
