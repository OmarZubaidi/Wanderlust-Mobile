import { Platform, Text, View } from 'react-native';
import { AgendaEntry } from 'react-native-calendars';
import * as Calendar from 'expo-calendar';
import { colorStyles } from '../styles';
import convertDateToDay from './convertDateToDay';

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

export async function createCalendar(tripName: string) {
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Wanderlust', type: '' };
  await Calendar.createCalendarAsync({
    title: tripName,
    color: colorStyles.lightSkyBlue,
    entityType: Calendar.EntityTypes.EVENT,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
}

export function renderItem(item: AgendaEntry) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

export function renderDay(day: any, item: AgendaEntry) {
  return (
    <View>
      <Text>{convertDateToDay(day).split(' ')[2]}</Text>
      <View>{renderItem(item!)}</View>
    </View>
  );
}
