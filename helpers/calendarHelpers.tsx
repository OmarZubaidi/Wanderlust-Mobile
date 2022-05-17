import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { AgendaEntry } from 'react-native-calendars';
import * as Calendar from 'expo-calendar';
import {
  calendarStyles,
  colorStyles,
  styles,
  touchableStyles,
} from '../styles';

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
    color: colorStyles.blue,
    entityType: Calendar.EntityTypes.EVENT,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
}

export function renderItem(item: AgendaEntry, navigation: any) {
  // Ignoring TS in some places since AgendaEntry doesn't have all the
  // properties I need, but I need to use that type to make it work.
  return (
    <TouchableOpacity
      activeOpacity={touchableStyles}
      style={[calendarStyles.styleObject.item]}
      onPress={() => {
        navigation.navigate('Map', {
          screen: 'MapScreen',
          params: {
            //@ts-ignore
            latitude: item.latitude,
            //@ts-ignore
            longitude: item.longitude,
          },
        });
      }}
    >
      <Text style={[calendarStyles.styleObject.itemText, styles.fontBold]}>
        {item.name}
      </Text>
      <View style={[calendarStyles.styleObject.horizontal]}>
        <Text style={[calendarStyles.styleObject.itemText, styles.font]}>
          {/* @ts-ignore */}
          {item.start} to {item.end}
        </Text>
        {/* @ts-ignore */}
        {item.price > 0 && (
          <Text style={[calendarStyles.styleObject.itemText, styles.font]}>
            €{item.price}
          </Text>
        )}
      </View>
      <Text style={[calendarStyles.styleObject.itemText, styles.font]}>
        {/* @ts-ignore */}
        {item.description}
      </Text>
    </TouchableOpacity>
  );
}
