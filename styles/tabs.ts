import colors from './colors';

export default {
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  headerTitleStyle: {
    color: colors.grey,
    fontSize: 24,
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerTitle: 'Wanderlust',
  tabBarActiveTintColor: colors.sidebarBlue,
  tabBarInactiveTintColor: colors.blackish,
  tabBarItemStyle: {
    marginTop: 10,
    paddingBottom: 10,
    height: 45,
  },
};
