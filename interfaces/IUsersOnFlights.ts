export default interface IUsersOnFlights {
  id?: number;
  userId: number;
  flightId: number;
  tripId: number;
  createdAt?: string; // TODO Change to Date and refactor helpers
}
