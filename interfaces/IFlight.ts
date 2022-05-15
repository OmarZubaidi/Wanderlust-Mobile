export default interface IFlight {
  id?: number;
  departureCity: string;
  arrivalCity: string;
  lengthOfFlight: string;
  price: number;
  flightApiId: number;
  UsersOnFlights?: [];
  Users?: [];
  createdAt?: Date;
  itineraries: {
    depAirport: string;
    arrAirport: string;
    depTerminal: string;
    arrTerminal: string;
    departure: string;
    arrival: string;
  }[];
}