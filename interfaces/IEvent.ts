export default interface IEvent {
  id?: number;
  title: string;
  start: string; // TODO Change to Date and refactor helpers
  end: string; // TODO  Change to Date and refactor helpers
  allDay: boolean;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  price: number;
  eventApiId: number;
  bookingLink: string;
  type: string;
  pictures: string;
  rating: number;
  tripId?: number;
}
