import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CalendarScreen,
  FlightScreen,
  HotelScreen,
  MapScreen,
} from './screens';
import {
  CalendarIcon,
  FlightIcon,
  HotelIcon,
  LogoutIcon,
  MapIcon,
} from './components/Icons';
import {
  colorStyles,
  logoutStyles,
  tabStyles,
  touchableStyles,
} from './styles';
import { useAuthContext, useUserContext } from './contexts';
import { RouteProp, ParamListBase } from '@react-navigation/native';

const BottomTabs = createBottomTabNavigator();

interface IOptionsProps {
  route: RouteProp<ParamListBase, string>;
}

function Tabs() {
  const { logout } = useAuthContext();
  const { userDetails } = useUserContext();

  function options({ route }: IOptionsProps): BottomTabNavigationOptions {
    return {
      ...tabStyles,
      tabBarIcon: ({ color }) => {
        switch (route.name) {
          case 'Calendar':
            return <CalendarIcon color={color} />;
          case 'Map':
            return <MapIcon color={color} />;
          case 'Flight':
            return <FlightIcon color={color} />;
          case 'Hotel':
            return <HotelIcon color={color} />;
        }
      },
      // TODO add logo
      // headerLeft: () => (
      //   <Image
      //     style={{ width: 40, height: 40, marginRight: -20 }}
      //     source={require('./assets/icon.png')}
      //   />
      // ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={touchableStyles}
          onPress={() => logout(userDetails.accessToken)}
          style={logoutStyles.logout}
        >
          <LogoutIcon color={colorStyles.navy} />
        </TouchableOpacity>
      ),
    };
  }

  return (
    <BottomTabs.Navigator screenOptions={options}>
      <BottomTabs.Screen name='Calendar' component={CalendarScreen} />
      <BottomTabs.Screen name='Map' component={MapScreen} />
      <BottomTabs.Screen name='Flight' component={FlightScreen} />
      <BottomTabs.Screen name='Hotel' component={HotelScreen} />
    </BottomTabs.Navigator>
  );
}

export default Tabs;
