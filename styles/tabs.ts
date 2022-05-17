import colors from './colors';

export default {
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.navy,
  },
  headerTitleStyle: {
    color: colors.navy,
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerTitle: 'Wanderlust',
  tabBarActiveTintColor: colors.blue,
  tabBarInactiveTintColor: colors.black,
  tabBarItemStyle: {
    marginTop: 10,
    paddingBottom: 10,
    height: 45,
  },
};
