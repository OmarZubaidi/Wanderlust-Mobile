import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import * as ExpoCalendar from 'expo-calendar';
import { calendarStyles, colorStyles } from '../styles';
import TripOverview from './TripOverview';
import { calendarHelpers, formatEvents } from '../helpers';
import { IEvent } from '../interfaces';
import { useTripContext } from '../contexts';

const EVENTS: IEvent[] = [
  {
    title: 'Lorem ipsum dolor',
    start: '2022-05-30T09:00:00.000Z',
    end: '2022-05-30T10:00:00.000Z',
    allDay: false,
    description: 'test',
    location: 'London',
    latitude: 51.5172,
    longitude: -0.1176,
    price: 0,
    eventApiId: 12323,
    bookingLink: 'LINK',
    type: 'Activity',
    pictures: 'reeeeee',
    rating: 3.2,
    tripId: 2,
  },
  {
    title: 'Dolores yo',
    start: '2022-05-30T10:00:00.000Z',
    end: '2022-05-30T11:00:00.000Z',
    allDay: false,
    description: 'not first',
    location: 'Barcelona',
    latitude: 123,
    longitude: 456,
    price: 100,
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
    latitude: 51.4972,
    longitude: -0.1376,
    price: 10,
    eventApiId: 12332,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
  {
    title: 'Junio',
    start: '2022-06-01T11:00:00.000Z',
    end: '2022-06-01T14:00:00.000Z',
    allDay: false,
    description: 'Hot',
    location: 'Barcelona',
    latitude: 456,
    longitude: 123,
    price: 0,
    eventApiId: 12325,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
  {
    title: 'Byeeeee',
    start: '2022-06-02T11:00:00.000Z',
    end: '2022-06-02T14:00:00.000Z',
    allDay: false,
    description: 'Byeeeeeeeeeeeeeeeeeeeeee',
    location: 'Barcelona',
    latitude: 456,
    longitude: 123,
    price: 0,
    eventApiId: 12326,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
];

const TRIP = {
  start: '2022-05-30T00:00:00.000Z',
  end: '2022-06-02T00:00:00.000Z',
  destination: 'Barcelona',
};

interface IProps {
  navigation: any;
}

function Calendar({ navigation }: IProps) {
  const { tripDetails } = useTripContext();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(
          ExpoCalendar.EntityTypes.EVENT
        );
        // Create the calendar on the user's device to use reminders
        if (!calendars.some(calendar => calendar.title === 'Wanderlust'))
          calendarHelpers.createCalendar('Wanderlust');
      }
    })();
  }, []);

  const events = formatEvents(tripDetails.Events);
  // console.log(events);
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={{ flex: 1 }}>
        <Agenda
          items={events}
          // Initially selected day
          selected={TRIP.start}
          minDate={TRIP.start}
          maxDate={TRIP.end}
          pastScrollRange={0}
          futureScrollRange={1}
          renderItem={item => calendarHelpers.renderItem(item, navigation)}
          rowHasChanged={(r1, r2) => {
            return r1.name !== r2.name;
          }}
          showClosingKnob={true}
          hideExtraDays={true}
          theme={calendarStyles.agenda}
        />
      </View>
    </>
  );
}

export default Calendar;
