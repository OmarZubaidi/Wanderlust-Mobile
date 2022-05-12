import colors from './colors';
import { Button } from 'react-native';
import { color } from 'react-native-reanimated';

export default {
  headerStyle: {
    backgroundColor: colors.lightSkyBlue,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitleStyle: {
    color: colors.blackish,
    fontSize: 24,
  },
  tabBarStyle: {
    backgroundColor: colors.lightSkyBlue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerTitle: 'Wanderlust',
  headerTitleAlign: 'center',
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.blackish,
  tabBarItemStyle: {
    marginTop: 10,
    paddingBottom: 10,
    height: 45,
  },
};
