import { IUser, IUsersOnHotels } from '.';

export default interface IHotel {
  id?: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  arrival: string; // TODO Change to Date and refactor helpers
  departure: string; // TODO Change to Date and refactor helpers
  nights: number;
  priceTotal: number;
  hotelApiId: string;
  createdAt?: string; // TODO Change to Date and refactor helpers
  UsersOnHotels?: IUsersOnHotels[];
  Users?: IUser[];
  description: string;
  rating: string;
  type: string;
}
