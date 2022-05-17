export default interface IUsersOnTrips {
  id: number;
  userId: number;
  tripId: number;
  createdAt: string; // TODO Change to Date and refactor helpers
}
