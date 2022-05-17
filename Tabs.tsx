import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
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
  iconStyles,
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
            return <CalendarIcon color={color} size={iconStyles.bigger} />;
          case 'Map':
            return <MapIcon color={color} size={iconStyles.bigger} />;
          case 'Flight':
            return <FlightIcon color={color} size={iconStyles.bigger} />;
          case 'Hotel':
            return <HotelIcon color={color} size={iconStyles.bigger} />;
        }
      },
      headerLeft: () => (
        <Image
          style={{
            width: iconStyles.biggest,
            height: iconStyles.biggest,
            marginRight: -iconStyles.normal,
          }}
          source={require('./assets/icon.png')}
        />
      ),
      headerRight: () => (
        <View style={logoutStyles.headerRight}>
          <Image
            source={{ uri: userDetails.pictureUrl }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            activeOpacity={touchableStyles}
            onPress={() => logout(userDetails.accessToken)}
            style={logoutStyles.logout}
          >
            <LogoutIcon color={colorStyles.navy} />
          </TouchableOpacity>
        </View>
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
