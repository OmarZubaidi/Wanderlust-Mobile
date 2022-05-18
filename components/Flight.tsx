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
import { IFlight, IItinerary } from '../interfaces';
import { convertDateToDay, convertDateToTime } from '../helpers';
import TripOverview from './TripOverview';
import { FlightIcon } from './Icons';
import Friends from './Friends';
import { useTripContext } from '../contexts';

function flightRenderer(flight: IFlight) {
  const { lengthOfFlight } = flight;
  const friends = flight.Users?.map((user) => user.pictureUrl);

  const itinerary: IItinerary[] = JSON.parse(flight.itineraries);
  return itinerary.map((flight) => {
    const { departure, arrival, depAirport, arrAirport } = flight;
    const departureDate = new Date(departure);
    const departureDay = convertDateToDay(departureDate).split(' ').join('\n');
    const departureTime = convertDateToTime(departureDate);
    const arrivalTime = convertDateToTime(new Date(arrival));
    const flightLength =
      lengthOfFlight.slice(2, -1).split('H').join('h ') + 'm';

    return (
      <View
        style={[flightAndHotelStyles.container]}
        key={`${depAirport}${arrAirport}`}
      >
        <View style={[flightAndHotelStyles.maxWidthSmaller]}>
          <Text style={[flightAndHotelStyles.centerContent, styles.font]}>
            {departureDay}
          </Text>
        </View>
        <View
          style={[
            flightAndHotelStyles.centerContent,
            flightAndHotelStyles.dividerStart,
          ]}
        >
          <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
            {departureTime}
          </Text>
          <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
            {depAirport}
          </Text>
        </View>
        <View style={[flightAndHotelStyles.dividerMiddleFlight]} />
        <View style={[flightAndHotelStyles.centerContent]}>
          <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
            {flightLength}
          </Text>
          <FlightIcon color={colorStyles.blue} />
        </View>
        <View style={[flightAndHotelStyles.dividerMiddleFlight]} />
        <View
          style={[
            flightAndHotelStyles.centerContent,
            flightAndHotelStyles.dividerEnd,
          ]}
        >
          <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
            {arrivalTime}
          </Text>
          <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
            {arrAirport}
          </Text>
        </View>
        <Friends friends={friends} size={iconStyles.bigger} />
      </View>
    );
  });
}

function Flight() {
  const { tripDetails } = useTripContext();
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={[styles.container]}>
        <FlatList
          data={tripDetails.Flights}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => flightRenderer(item)}
        />
      </View>
    </>
  );
}

export default Flight;
