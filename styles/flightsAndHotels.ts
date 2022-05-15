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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  dividerStart: {
    borderLeftWidth: 0.5,
    borderLeftColor: colors.greyShadow,
    paddingLeft: 10,
  },
  dividerEnd: {
    borderRightWidth: 0.5,
    borderRightColor: colors.greyShadow,
    paddingRight: 10,
  },
  dividerMiddle: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.greyShadow,
    paddingHorizontal: 5,
  },
  innerText: {
    fontWeight: '200',
    fontSize: 12,
    paddingVertical: 5,
  },
  smallerText: {
    fontWeight: '200',
    fontSize: 8,
  },
});
