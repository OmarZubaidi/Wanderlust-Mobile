import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
