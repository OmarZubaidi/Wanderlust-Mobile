import { IUser, IUsersOnHotels } from '.';

export default interface IHotel {
  id?: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  arrival: string;
  departure: string;
  nights: number;
  priceTotal: number;
  hotelApiId: string;
  createdAt?: string;
  UsersOnHotels?: IUsersOnHotels[];
  Users?: IUser[];
  description: string;
  rating: string;
  type: string;
}
