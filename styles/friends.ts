import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  friends: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  photo: {
    position: 'relative',
  },
  more: {
    alignSelf: 'center',
    paddingHorizontal: 3,
    color: colors.darkestBlue,
  },
});
