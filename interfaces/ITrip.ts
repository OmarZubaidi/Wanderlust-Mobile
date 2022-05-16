import { IEvent, IFlight, IHotel, IUser } from '.';

export default interface ITrip {
  id?: number;
  start: string; // TODO Change to Date and refactor helpers
  end: string; // TODO Change to Date and refactor helpers
  destination: string;
  Hotels?: IHotel[];
  Flights?: IFlight[];
  Events?: IEvent[];
  Users?: IUser[];
  createdAt?: string; // TODO Change to Date and refactor helpers
  latitude: number;
  longitude: number;
}
