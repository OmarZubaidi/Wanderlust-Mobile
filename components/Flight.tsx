import React from 'react';
import { FlatList, Text, View } from 'react-native';
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
import { useTripContext, useUserContext } from '../contexts';

const FLIGHTS: IFlight[] = [
  {
    departureCity: 'London',
    arrivalCity: 'Barcelona',
    lengthOfFlight: 'PT1H45M',
    price: 230,
    flightApiId: 1234,
    itineraries: [
      {
        depAirport: 'London',
        arrAirport: 'Barcelona',
        depTerminal: '2',
        arrTerminal: '1',
        departure: '2022-05-30T10:00:00.000Z',
        arrival: '2022-05-30T10:00:00.000Z',
      },
    ],
  },
  {
    departureCity: 'Barcelona',
    arrivalCity: 'London',
    lengthOfFlight: 'PT1H45M',
    price: 230,
    flightApiId: 1235,
    itineraries: [
      {
        depAirport: 'London',
        arrAirport: 'Barcelona',
        depTerminal: '2',
        arrTerminal: '1',
        departure: '2022-06-02T10:00:00.000Z',
        arrival: '2022-06-02T10:00:00.000Z',
      },
    ],
  },
];

const FRIENDS_IMAGES = [
  'http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png',
  'https://freepngimg.com/thumb/shape/29779-8-circle-file.png',
  'https://pngimg.com/uploads/circle/circle_PNG12.png',
  'https://clipartion.com/wp-content/uploads/2015/11/circle-clipart-free-clip-art-images.png',
];

function flightRenderer(flight: IFlight) {
  const { lengthOfFlight } = flight;
  const { departure, arrival, depAirport, arrAirport } = flight.itineraries[0];
  const departureDate = new Date(departure);
  const departureDay = convertDateToDay(departureDate).split(' ').join('\n');
  const departureTime = convertDateToTime(departureDate);
  const arrivalTime = convertDateToTime(new Date(arrival));
  const flightLength = lengthOfFlight.slice(2, -1).split('H').join('h ') + 'm';
  //const users = flight.Users?.map(user => user.pictureUrl);

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
  const { tripDetails } = useTripContext();
  const { userDetails } = useUserContext();

  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={[styles.container]}>
        <FlatList
          data={FLIGHTS}
          keyExtractor={item => `${item.flightApiId}`}
          renderItem={({ item }) => flightRenderer(item)}
        />
      </View>
    </>
  );
}

export default Flight;
