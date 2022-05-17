import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';
import tabs from './tabs';

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
  selectorContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    backgroundColor: colors.grey,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
  },
  separatorTitle: {
    ...tabs.headerTitleStyle,
  },
  separatorTitleView: {
    ...tabs.headerStyle,
    ...tabs.tabBarItemStyle,
    marginTop: 10,
  },
  marginLeft: {
    marginLeft: 16,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  marginRight: {
    paddingRight: 7.5,
  },
  city: {
    fontSize: 24,
  },
  textColor: {
    color: colors.navy,
  },
  bottomBorder: {
    borderBottomWidth: 1,
  },
});
