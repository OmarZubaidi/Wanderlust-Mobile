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

function hotelRenderer(hotel: IHotel) {
  const { name, arrival, departure, nights } = hotel;
  const arrivalDay = convertDateToDay(new Date(arrival)).split(' ').join('\n');
  const departureDay = convertDateToDay(new Date(departure))
    .split(' ')
    .join('\n');
  const friends = hotel.Users ? hotel.Users.map((user) => user.pictureUrl) : [];
  return (
    <View style={[flightAndHotelStyles.container]}>
      <View style={[flightAndHotelStyles.horizontal]}>
        <View style={[flightAndHotelStyles.dividerEnd]}>
          <Text
            style={[
              flightAndHotelStyles.centerContent,
              flightAndHotelStyles.smallerText,
              styles.font,
            ]}
          >
            Check-in
          </Text>
          <Text style={[flightAndHotelStyles.centerContent, styles.font]}>
            {arrivalDay}
          </Text>
        </View>
        <View style={[flightAndHotelStyles.checkout]}>
          <Text
            style={[
              flightAndHotelStyles.centerContent,
              flightAndHotelStyles.smallerText,
              styles.font,
            ]}
          >
            Check-out
          </Text>
          <Text style={[flightAndHotelStyles.centerContent, styles.font]}>
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
        <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
          {nights} nights
        </Text>
        <HotelIcon color={colorStyles.blue} size={iconStyles.smaller} />
        <Text style={[flightAndHotelStyles.innerText, styles.fontExtraLight]}>
          {name}
        </Text>
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
          keyExtractor={(item) => `${item.arrival}-${item.hotelApiId}`}
          renderItem={({ item }) => hotelRenderer(item)}
        />
      </View>
    </>
  );
}

export default Hotel;
