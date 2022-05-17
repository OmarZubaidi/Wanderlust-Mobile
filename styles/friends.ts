import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  friends: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  photo: {
    position: 'relative',
    borderRadius: 50,
  },
  more: {
    alignSelf: 'center',
    paddingHorizontal: 3,
    color: colors.navy,
  },
});
