import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  MapIcon,
} from './components/Icons';
import { tabStyles } from './styles';
import { useAuthContext, useUserContext } from './contexts';

const BottomTabs = createBottomTabNavigator();

interface IOptionsProps {
  route: {
    name: 'Calendar' | 'Map' | 'Flight' | 'Hotel';
  };
}

interface ITabProps {
  color: 'string';
}

function Tabs() {
  const { logout } = useAuthContext();
  const { userDetails } = useUserContext();

  function options({ route }: IOptionsProps) {
    return {
      ...tabStyles,
      tabBarIcon: ({ color }: ITabProps) => {
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
      headerRight: () => (
        <TouchableOpacity onPress={() => logout(userDetails.accessToken)}>
          <Text>Logout</Text>
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
