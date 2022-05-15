import { StyleSheet } from 'react-native';
import colors from './colors';

export const styleObject = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: colors.sidebarBlue,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  itemText: {
    color: colors.white,
    fontWeight: '300',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const agenda = {
  agendaDayTextColor: colors.blackish,
  agendaDayNumColor: colors.blackish,
  agendaTodayColor: colors.sidebarBlue,
  agendaKnobColor: colors.sidebarBlue,
  calendarBackground: colors.white,
  textSectionTitleColor: colors.grey,
  dayTextColor: colors.blackish,
  selectedDayTextColor: colors.white,
  monthTextColor: colors.blackish,
  selectedDayBackgroundColor: colors.sidebarBlue,
  textDisabledColor: colors.greyShadow,
  backgroundColor: colors.white,
  dotColor: colors.white,
  selectedDotColor: colors.sidebarBlue,
  todayDotColor: colors.beige,
  todayTextColor: colors.white,
  todayBackgroundColor: colors.beige,
  disabledDotColor: colors.sidebarBlue,
  // TODO add fonts
  // textDayFontFamily: TextStyle['Inter_400Regular'],
  // textMonthFontFamily: TextStyle['Inter_400Regular'],
  // textDayHeaderFontFamily: TextStyle['Inter_400Regular'],
  // todayButtonFontFamily: TextStyle['Inter_400Regular'],
};
