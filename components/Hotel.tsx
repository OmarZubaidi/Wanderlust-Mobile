import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { IHotel } from '../interfaces';
import {
  colorStyles,
  flightAndHotelStyles,
  iconStyles,
  styles,
} from '../styles';
import Friends from './Friends';
import { HotelIcon } from './Icons';
import TripOverview from './TripOverview';
import { useTripContext } from '../contexts';

const HOTELS: IHotel[] = [
  {
    name: 'Teds Plaza',
    location: 'Austria',
    latitude: 123,
    longitude: 5678,
    arrival: '2022-05-09T14:15:18.532Z',
    departure: '2022-05-14T14:15:18.532Z',
    nights: 5,
    priceTotal: 303,
    hotelApiId: '142',
    description: 'Why hello there.',
    type: 'hotel',
    rating: '3',
  },
  {
    name: 'Grand Budapest Hotel',
    location: 'Austria',
    latitude: 567,
    longitude: 8123,
    arrival: '2022-05-14T14:15:18.532Z',
    departure: '2022-05-19T14:15:18.532Z',
    nights: 5,
    priceTotal: 404,
    hotelApiId: '142',
    description:
      'Welcome to the hotel California! Such a lovely place, such a lovely place. Such a lovely face.',
    type: 'hotel',
    rating: '4.9',
  },
];

const FRIENDS_IMAGES = [
  'http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png',
  'https://freepngimg.com/thumb/shape/29779-8-circle-file.png',
  'https://pngimg.com/uploads/circle/circle_PNG12.png',
  'https://clipartion.com/wp-content/uploads/2015/11/circle-clipart-free-clip-art-images.png',
];

function hotelRenderer(hotel: IHotel) {
  const { name, arrival, departure, nights } = hotel;
  const arrivalDay = convertDateToDay(new Date(arrival)).split(' ').join('\n');
  const departureDay = convertDateToDay(new Date(departure))
    .split(' ')
    .join('\n');
  const friends = hotel.Users?.map(user => user.pictureUrl);
  return (
    <View style={[flightAndHotelStyles.container]}>
      <View style={[flightAndHotelStyles.horizontal]}>
        <View style={[flightAndHotelStyles.dividerEnd]}>
          <Text
            style={[
              flightAndHotelStyles.centerContent,
              flightAndHotelStyles.smallerText,
            ]}
          >
            Check-in
          </Text>
          <Text style={[flightAndHotelStyles.centerContent]}>{arrivalDay}</Text>
        </View>
        <View style={[flightAndHotelStyles.checkout]}>
          <Text
            style={[
              flightAndHotelStyles.centerContent,
              flightAndHotelStyles.smallerText,
            ]}
          >
            Check-out
          </Text>
          <Text style={[flightAndHotelStyles.centerContent]}>
            {departureDay}
          </Text>
        </View>
      </View>
      <View style={[flightAndHotelStyles.dividerMiddleHotel]} />
      <View
        style={[
          flightAndHotelStyles.centerContent,
          flightAndHotelStyles.dividerEnd,
          flightAndHotelStyles.maxWidth,
        ]}
      >
        <Text style={[flightAndHotelStyles.innerText]}>{nights} nights</Text>
        <HotelIcon color={colorStyles.blue} size={iconStyles.smaller} />
        <Text style={[flightAndHotelStyles.innerText]}>{name}</Text>
      </View>
      <Friends friends={friends} size={iconStyles.bigger} />
    </View>
  );
}

function Hotel() {
  const { tripDetails } = useTripContext();

  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={[styles.container]}>
        <FlatList
          data={tripDetails.Hotels}
          keyExtractor={item => `${item.arrival}-${item.hotelApiId}`}
          renderItem={({ item }) => hotelRenderer(item)}
        />
      </View>
    </>
  );
}

export default Hotel;
