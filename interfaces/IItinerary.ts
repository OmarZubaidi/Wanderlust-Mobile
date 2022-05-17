export default interface IItinerary {
  depAirport: string;
  arrAirport: string;
  depTerminal?: string;
  arrTerminal?: string;
  departure: string;
  arrival: string;
}
