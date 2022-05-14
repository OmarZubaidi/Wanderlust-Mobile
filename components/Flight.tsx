import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {
  colorStyles,
  flightAndHotelStyles,
  iconStyles,
  styles,
} from '../styles';
import { IFlight } from '../interfaces';
import { convertDateToDay, convertDateToTime } from '../helpers';
import TripOverview from './TripOverview';
import { FlightIcon } from './Icons';
import Friends from './Friends';

const FLIGHTS = [
  {
    departure: '2022-05-30T00:00:00.000Z',
    arrival: '2022-05-30T02:00:00.000Z',
    gate: 'B',
    depAirport: 'London',
    arrAirport: 'Barcelona',
    lengthOfFlight: '2:30 h',
    price: '230 €',
    flightApiId: 1234,
    userId: 16,
    tripId: 2,
  },
  {
    departure: '2022-06-10T00:00:00.000Z',
    arrival: '2022-06-10T02:00:00.000Z',
    gate: 'A',
    depAirport: 'Barcelona',
    arrAirport: 'London',
    lengthOfFlight: '2:30 h',
    price: '230 €',
    flightApiId: 1235,
    userId: 16,
    tripId: 3,
  },
];

const FRIENDS_IMAGES = [
  'http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png',
  'https://freepngimg.com/thumb/shape/29779-8-circle-file.png',
  'https://pngimg.com/uploads/circle/circle_PNG12.png',
  'https://clipartion.com/wp-content/uploads/2015/11/circle-clipart-free-clip-art-images.png',
];

function flightRenderer(flight: IFlight) {
  const { departure, arrival, depAirport, arrAirport, lengthOfFlight } = flight;
  const departureDate = new Date(departure);
  const departureDay = convertDateToDay(departureDate).split(' ').join('\n');
  const departureTime = convertDateToTime(departureDate);
  const arrivalTime = convertDateToTime(new Date(arrival));
  const flightLength = lengthOfFlight.split(' ')[0].split(':').join('h ') + 'm';

  return (
    <View style={[flightAndHotelStyles.container]}>
      <Text style={[flightAndHotelStyles.centerContent]}>{departureDay}</Text>
      <View
        style={[
          flightAndHotelStyles.centerContent,
          flightAndHotelStyles.dividerStart,
        ]}
      >
        <Text style={[flightAndHotelStyles.innerText]}>{departureTime}</Text>
        <Text style={[flightAndHotelStyles.innerText]}>{depAirport}</Text>
      </View>
      <View style={[flightAndHotelStyles.dividerMiddle]} />
      <View style={[flightAndHotelStyles.centerContent]}>
        <Text style={[flightAndHotelStyles.innerText]}>{flightLength}</Text>
        <FlightIcon color={colorStyles.darkestBlue} />
      </View>
      <View style={[flightAndHotelStyles.dividerMiddle]} />
      <View
        style={[
          flightAndHotelStyles.centerContent,
          flightAndHotelStyles.dividerEnd,
        ]}
      >
        <Text style={[flightAndHotelStyles.innerText]}>{arrivalTime}</Text>
        <Text style={[flightAndHotelStyles.innerText]}>{arrAirport}</Text>
      </View>
      <Friends friends={FRIENDS_IMAGES} size={iconStyles.bigger} />
    </View>
  );
}

function Flight() {
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={[styles.container]}>
        <FlatList
          data={FLIGHTS}
          keyExtractor={(item) => `${item.userId}-${item.tripId}`}
          renderItem={({ item }) => flightRenderer(item)}
        />
      </View>
    </>
  );
}

export default Flight;
