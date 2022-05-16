import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'flex-start',
    marginLeft: '23.5%',
    color: colors.navy,
    fontSize: 24,
  },
  input: {
    width: 200,
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.navy,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: '23.5%',
    width: '30%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 10,
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: colors.navy,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
  },
  bottomView: {
    alignContent: 'center',
    padding: 60,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 16,
  },
  google: {
    color: colors.blue,
  },
});
