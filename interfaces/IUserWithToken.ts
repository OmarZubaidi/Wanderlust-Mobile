import { IUser } from '.';

export default interface IUserWithToken extends IUser {
  accessToken: string;
}
