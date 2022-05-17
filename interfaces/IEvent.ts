export default interface IEvent {
  id?: number;
  title: string;
  start: string;
  end: string;
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
