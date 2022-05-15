export interface IFlight {
  id?: number;
  // departure: Date;
  // arrival: Date;
  // gate: string;
  // depAirport: string;
  // arrAirport: string;
  departureCity: string;
  arrivalCity: string;
  lengthOfFlight: string;
  price: string;
  flightApiId: number;
  UsersOnFlights?: [];
  Users?: [];
  createdAt?: Date;
  itineraries: string;
}

export type Itinerary = {
  depAirport: string;
  arrAirport: string;
  depTerminal?: string;
  arrTerminal?: string;
  departure: Date;
  arrival: Date;
};
