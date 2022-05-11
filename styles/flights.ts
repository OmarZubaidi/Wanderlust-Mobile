import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  flight: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.greyishSkyBlue,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  dividerStart: {
    borderLeftWidth: 0.5,
    borderLeftColor: colors.grey,
    paddingLeft: 10,
  },
  dividerEnd: {
    borderRightWidth: 0.5,
    borderRightColor: colors.grey,
    paddingRight: 10,
  },
  dividerMiddle: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingHorizontal: 5,
  },
});
