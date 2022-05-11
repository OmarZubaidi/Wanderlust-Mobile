import React from 'react';
import { FlatList, Text, View } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { colorStyles, flightStyles, styles } from '../styles';
import { IFlight } from '../interfaces';
import { convertDateToDay, convertDateToTime } from '../helpers';
import TripOverview from './TripOverview';
import { FlightIcon } from './Icons';
import Friends from './Friends';

const FLIGHTS = [
  {
    departure: '1971-02-01T00:00:00.000Z',
    arrival: '1971-02-01T02:00:00.000Z',
    gate: 'B',
    depAirport: 'Barcelona',
    arrAirport: 'Berlin',
    lengthOfFlight: '2:30 h',
    price: '230 €',
    flightApiId: 1234,
    userId: 16,
    tripId: 2,
  },
  {
    departure: '2022-01-01T00:00:00.000Z',
    arrival: '2022-01-01T02:00:00.000Z',
    gate: 'A',
    depAirport: 'Berlin',
    arrAirport: 'Barcelona',
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
  const flightLength = lengthOfFlight.split(' ')[0].split(':').join('h') + 'm';

  return (
    <View style={[flightStyles.flight]}>
      <Text style={[flightStyles.centerContent]}>{departureDay}</Text>
      <View style={[flightStyles.centerContent, flightStyles.dividerStart]}>
        <Text>{departureTime}</Text>
        <Text>{depAirport}</Text>
      </View>
      <View style={[flightStyles.dividerMiddle]} />
      <View style={[flightStyles.centerContent]}>
        <Text>{flightLength}</Text>
        <FlightIcon color={colorStyles.darkestBlue} />
      </View>
      <View style={[flightStyles.dividerMiddle]} />
      <View style={[flightStyles.centerContent, flightStyles.dividerEnd]}>
        <Text>{arrivalTime}</Text>
        <Text>{arrAirport}</Text>
      </View>
      <Friends friends={FRIENDS_IMAGES} size={25} />
    </View>
  );
}

function Flight() {
  return (
    <>
      <View style={[styles.container]}>
        <FlatList
          data={FLIGHTS}
          keyExtractor={(item) => `${item.userId}-${item.tripId}`}
          renderItem={({ item }) => flightRenderer(item)}
        />
      </View>
      <TripOverview />
    </>
  );
}

export default Flight;
