import { IEvent, IFlight, IHotel, IUser } from '.';

export default interface ITrip {
  id?: number;
  start: string;
  end: string;
  destination: string;
  Hotels?: IHotel[];
  Flights?: IFlight[];
  Events?: IEvent[];
  Users?: IUser[];
  createdAt?: string;
  latitude: number;
  longitude: number;
}
