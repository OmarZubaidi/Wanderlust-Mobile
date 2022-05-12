import colors from './colors';
import { Button } from 'react-native';
import { color } from 'react-native-reanimated';

export default {
  headerStyle: {
    backgroundColor: colors.lightSkyBlue,
    borderBottomColor: colors.lightSkyBlue,
  },
  headerTitleStyle: {
    color: colors.blackish,
    fontSize: 24,
  },
  tabBarStyle: {
    backgroundColor: colors.lightSkyBlue,
    borderTopColor: colors.lightSkyBlue,
  },
  headerTitle: 'Wanderlust',
  headerTitleAlign: 'start',
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.blackish,
  tabBarItemStyle: {
    marginTop: 10,
    paddingBottom: 10,
    height: 45,
  },
};
