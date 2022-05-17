export default interface IUsersOnHotels {
  id: number;
  userId: number;
  hotelId: number;
  tripId: number;
  createdAt: string; // TODO Change to Date and refactor helpers
}
