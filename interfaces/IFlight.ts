import { IUser, IUsersOnFlights } from '.';

export default interface IFlight {
  id?: number;
  departureCity: string;
  arrivalCity: string;
  lengthOfFlight: string;
  price: number;
  flightApiId: number;
  UsersOnFlights?: IUsersOnFlights[];
  Users?: IUser[];
  createdAt?: string; // TODO Change to Date and refactor helpers
  itineraries: string;
}
