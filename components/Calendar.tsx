import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import * as ExpoCalendar from 'expo-calendar';
import { calendarStyles, colorStyles } from '../styles';
import TripOverview from './TripOverview';
import { calendarHelpers, formatEvents } from '../helpers';
import { useTripContext } from '../contexts';

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
        if (!calendars.some((calendar) => calendar.title === 'Wanderlust'))
          calendarHelpers.createCalendar('Wanderlust');
      }
    })();
  }, []);

  const events = formatEvents(tripDetails.Events);
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.grey} />
      <View style={{ flex: 1 }}>
        <Agenda
          items={events}
          // Initially selected day
          selected={tripDetails.start}
          minDate={tripDetails.start}
          maxDate={tripDetails.end}
          pastScrollRange={0}
          dayLoading={false}
          futureScrollRange={1}
          renderItem={(item) => calendarHelpers.renderItem(item, navigation)}
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
