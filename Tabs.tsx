import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
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

const BottomTabs = createBottomTabNavigator();

interface OptionsProps {
  route: {
    name: 'Calendar' | 'Map' | 'Flight' | 'Hotel';
  };
}

interface TabProps {
  color: 'string';
}

function options({ route }: OptionsProps) {
  return {
    ...tabStyles,
    tabBarIcon: ({ color }: TabProps) => {
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
  };
}

function Tabs() {
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
