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

const HOTELS = [
  {
    name: 'Teds Plaza',
    location: 'Austria',
    coordinates: '123, 5678',
    arrival: '2022-05-09T14:15:18.532Z',
    departure: '2022-05-14T14:15:18.532Z',
    nights: 5,
    priceTotal: '303 €',
    hotelApiId: 142,
    userId: 14,
    tripId: 1,
  },
  {
    name: 'Grand Budapest Hotel',
    location: 'Austria',
    coordinates: '567, 8123',
    arrival: '2022-05-14T14:15:18.532Z',
    departure: '2022-05-19T14:15:18.532Z',
    nights: 5,
    priceTotal: '404 €',
    hotelApiId: 142,
    userId: 15,
    tripId: 2,
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

  return (
    <View style={[flightAndHotelStyles.container]}>
      <Text style={[flightAndHotelStyles.centerContent]}>{arrivalDay}</Text>
      <View style={[flightAndHotelStyles.dividerMiddle]} />
      <View style={[flightAndHotelStyles.centerContent]}>
        <Text style={[flightAndHotelStyles.innerText]}>{nights} nights</Text>
        <HotelIcon color={colorStyles.darkestBlue} />
        <Text style={[flightAndHotelStyles.innerText]}>{name}</Text>
      </View>
      <View style={[flightAndHotelStyles.dividerMiddle]} />
      <Text
        style={[
          flightAndHotelStyles.centerContent,
          flightAndHotelStyles.dividerEnd,
        ]}
      >
        {departureDay}
      </Text>
      <Friends friends={FRIENDS_IMAGES} size={iconStyles.bigger} />
    </View>
  );
}

function Hotel() {
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={[styles.container]}>
        <FlatList
          data={HOTELS}
          keyExtractor={(item) => `${item.userId}-${item.tripId}`}
          renderItem={({ item }) => hotelRenderer(item)}
        />
      </View>
    </>
  );
}

export default Hotel;
