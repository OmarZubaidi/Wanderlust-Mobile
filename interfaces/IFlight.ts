export default interface IFlight {
  departureCity: string;
  arrivalCity: string;
  lengthOfFlight: string;
  price: number;
  flightApiId: number;
  itineraries: {
    depAirport: string;
    arrAirport: string;
    depTerminal: string;
    arrTerminal: string;
    departure: string;
    arrival: string;
  }[];
}
