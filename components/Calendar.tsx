import React, { useEffect } from 'react';
import { ImageBackground, Platform, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import * as ExpoCalendar from 'expo-calendar';
import { calendarStyles, colorStyles, imageStyles, styles } from '../styles';
import TripOverview from './TripOverview';
import { formatEvents } from '../helpers';

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

const TRIP = {
  start: '2022-05-30T00:00:00.000Z',
  end: '2022-06-11T00:00:00.000Z',
  destination: 'Barcelona',
};

async function getDefaultCalendarSource() {
  const defaultCalendar = await ExpoCalendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar(tripName: string) {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Wanderlust', type: '' };
  await ExpoCalendar.createCalendarAsync({
    title: tripName,
    color: colorStyles.lightSkyBlue,
    entityType: ExpoCalendar.EntityTypes.EVENT,
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

  const events = formatEvents(EVENTS);

  return (
    <>
      <ImageBackground
        source={require('../assets/beach.png')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <Agenda
          items={events}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={TRIP.start.split('T')[0]}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={TRIP.end.split('T')[0]}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={2}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={2}
          // Specify how each item should be rendered in agenda
          renderItem={(item) => {
            return (
              <View>
                <Text>Item</Text>
                {/* <Text>{item.name}</Text> */}
              </View>
            );
          }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day
          renderDay={(day, item) => (
            <View>
              <Text>Day</Text>
              {/* <Text>{day}</Text> */}
              {/* {item && <Text>{item.name}</Text>} */}
            </View>
          )}
          renderEmptyDate={() => (
            <View>
              <Text>Empty date</Text>
            </View>
          )}
          renderKnob={() => (
            <View>
              <Text>Knob</Text>
            </View>
          )}
          renderEmptyData={() => (
            <View>
              <Text>Empty data</Text>
            </View>
          )}
          hideKnob={true}
          // onRefresh={() => console.log('refreshing...')}
          // refreshing={false}
          // // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
          // refreshControl={null}
          // Agenda theme
          theme={calendarStyles.agenda}
          // Agenda container style
          style={calendarStyles.styleObject.calendar}
        />
        <TripOverview />
      </ImageBackground>
    </>
  );
}

export default Calendar;
