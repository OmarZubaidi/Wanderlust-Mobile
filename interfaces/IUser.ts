import { IFlight, IHotel, ITrip } from '.';

export default interface IUser {
  id?: number;
  email: string;
  username: string;
  sub: string;
  emailVerified: boolean;
  pictureUrl: string;
  origin?: string;
  createdAt?: Date;
  Hotels?: IHotel[];
  Flights?: IFlight[];
  Trips?: ITrip[];
}
