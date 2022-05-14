import React, { useEffect } from 'react';
import { Agenda } from 'react-native-calendars';
import * as ExpoCalendar from 'expo-calendar';
import { calendarStyles, colorStyles } from '../styles';
import TripOverview from './TripOverview';
import { calendarHelpers, formatEvents } from '../helpers';

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
    start: '2022-05-31T11:00:00.000Z',
    end: '2022-05-31T14:00:00.000Z',
    allDay: false,
    description: 'I dunno food or something',
    location: 'Barcelona',
    coordinates: '456, 123',
    price: '10 €',
    eventApiId: 12324,
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
    description: 'I dunno food or something',
    location: 'Barcelona',
    coordinates: '456, 123',
    price: '10 €',
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
    description: 'I dunno food or something',
    location: 'Barcelona',
    coordinates: '456, 123',
    price: '10 €',
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
          calendarHelpers.createCalendar('Wanderlust');
      }
    })();
  }, []);

  const events = formatEvents(EVENTS);

  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <Agenda
        items={events}
        // Initially selected day
        selected={TRIP.start}
        minDate={TRIP.start}
        maxDate={TRIP.end}
        pastScrollRange={1}
        futureScrollRange={1}
        renderItem={(item) => calendarHelpers.renderItem(item)}
        // Day can be undefined if the item is not first in that day
        renderDay={(day, item) => calendarHelpers.renderDay(day, item!)}
        showClosingKnob={true}
        theme={calendarStyles.agenda}
        // style={calendarStyles.styleObject.calendar}
      />
    </>
  );
}

export default Calendar;
