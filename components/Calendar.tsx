import React, { useEffect } from 'react';
import { ImageBackground, Platform, Text, View } from 'react-native';
import * as ExpoCalendar from 'expo-calendar';
import { colorStyles, imageStyles, styles } from '../styles';
import TripOverview from './TripOverview';

const EVENTS = [
  {
    title: 'Lorem ipsum dolor',
    start: '2022-05-30T09:00:00.000Z',
    end: '2022-05-30T10:00:00.000Z',
    allDay: false,
    description: 'test',
    location: 'Barcelona',
    coordinates: '123, 456',
    price: 'free',
    eventApiId: 12323,
    bookingLink: 'LINK',
    type: 'Activity',
    pictures: 'reeeeee',
    rating: 3.2,
    tripId: 2,
  },
  {
    title: 'Wow second event',
    start: '2022-05-30T11:00:00.000Z',
    end: '2022-05-30T14:00:00.000Z',
    allDay: false,
    description: 'I dunno food or something',
    location: 'Barcelona',
    coordinates: '456, 123',
    price: '10 €',
    eventApiId: 12323,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
];

async function getDefaultCalendarSource() {
  const defaultCalendar = await ExpoCalendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar(tripName: string) {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Wanderlust' };
  await ExpoCalendar.createCalendarAsync({
    title: tripName,
    color: colorStyles.lightSkyBlue,
    entityType: ExpoCalendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: ExpoCalendar.CalendarAccessLevel.OWNER,
  });
}

function Calendar() {
  useEffect(() => {
    (async () => {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(
          ExpoCalendar.EntityTypes.EVENT
        );
        // Create the calendar on the user's device to use reminders
        if (!calendars.some((calendar) => calendar.title === 'Wanderlust'))
          createCalendar('Wanderlust');
      }
    })();
  }, []);

  return (
    <>
      <ImageBackground
        source={require('../assets/beach.png')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <View style={[styles.container]}>
          <Text>Calendar</Text>
        </View>
        <TripOverview />
      </ImageBackground>
    </>
  );
}

export default Calendar;
