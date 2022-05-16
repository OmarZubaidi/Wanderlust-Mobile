import { StyleSheet } from 'react-native';
import colors from './colors';

export const styleObject = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: colors.blue,
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
  agendaDayTextColor: colors.black,
  agendaDayNumColor: colors.black,
  agendaTodayColor: colors.blue,
  agendaKnobColor: colors.blue,
  calendarBackground: colors.white,
  textSectionTitleColor: colors.navy,
  dayTextColor: colors.black,
  selectedDayTextColor: colors.white,
  monthTextColor: colors.black,
  selectedDayBackgroundColor: colors.blue,
  textDisabledColor: colors.grey,
  backgroundColor: colors.white,
  dotColor: colors.white,
  selectedDotColor: colors.blue,
  todayDotColor: colors.beige,
  todayTextColor: colors.white,
  todayBackgroundColor: colors.beige,
  disabledDotColor: colors.blue,
  // TODO add fonts
  // textDayFontFamily: TextStyle['Inter_400Regular'],
  // textMonthFontFamily: TextStyle['Inter_400Regular'],
  // textDayHeaderFontFamily: TextStyle['Inter_400Regular'],
  // todayButtonFontFamily: TextStyle['Inter_400Regular'],
};
