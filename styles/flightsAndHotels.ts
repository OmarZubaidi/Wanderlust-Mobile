import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontal: {
    flexDirection: 'row',
  },
  maxWidth: {
    width: 100,
  },
  maxWidthSmaller: {
    width: 30,
  },
  checkout: {
    paddingLeft: 10,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  innerText: {
    fontSize: 12,
    paddingVertical: 5,
    textAlign: 'center',
  },
  smallerText: {
    fontSize: 8,
  },
  dividerStart: {
    borderLeftWidth: 1,
    borderLeftColor: colors.grey,
    paddingLeft: 10,
  },
  dividerEnd: {
    borderRightWidth: 1,
    borderRightColor: colors.grey,
    paddingRight: 10,
  },
  dividerMiddleFlight: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingHorizontal: 5,
  },
  dividerMiddleHotel: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingHorizontal: 30,
  },
});
