export default interface IItinerary {
  depAirport: string;
  arrAirport: string;
  depTerminal?: string;
  arrTerminal?: string;
  departure: string; // TODO Change to Date and refactor helpers
  arrival: string; // TODO Change to Date and refactor helpers
}
