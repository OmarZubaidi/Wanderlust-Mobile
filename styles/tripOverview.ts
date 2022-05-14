import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  vertical: {
    flexDirection: 'column',
  },
  city: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textColor: {
    color: colors.grey,
  },
  bottomBorder: {
    borderBottomWidth: 0.5,
  },
});
