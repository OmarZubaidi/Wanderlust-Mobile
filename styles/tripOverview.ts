import { StyleSheet } from 'react-native';
import colors from './colors';
import friends from './friends';

export default StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: colors.beige,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '97.5%',
    borderRadius: 15,
  },
  vertical: {
    flexDirection: 'column',
  },
  city: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.darkestBlue,
  },
});
