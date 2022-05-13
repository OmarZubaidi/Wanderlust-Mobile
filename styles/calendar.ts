import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

export const styleObject = StyleSheet.create({
  calendar: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export const agenda = {
  agendaDayTextColor: colors.blackish,
  agendaDayNumColor: colors.blackish,
  agendaTodayColor: colors.lightSkyBlue,
  agendaKnobColor: colors.lightSkyBlue,
};
