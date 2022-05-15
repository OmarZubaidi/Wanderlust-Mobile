export default interface IHotel {
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  arrival: string;
  departure: string;
  nights: number;
  priceTotal: number;
  hotelApiId: string;
  description: string;
  type: string;
  rating: string;
}
