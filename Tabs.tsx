import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
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
import { Button } from 'react-native';
import UserContext from './context/userContext';

const BottomTabs = createBottomTabNavigator();

interface IOptionsProps {
  route: {
    name: 'Calendar' | 'Map' | 'Flight' | 'Hotel';
  };
}

interface ITabProps {
  color: 'string';
}

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
  };
}

function Tabs() {
  const { setUserEmail } = useContext(UserContext);
  return (
    <BottomTabs.Navigator
      screenOptions={{
        ...options,
        headerRight: () => (
          <Button onPress={() => setUserEmail(null)} title='Logout' />
        ),
      }}
    >
      <BottomTabs.Screen name='Calendar' component={CalendarScreen} />
      <BottomTabs.Screen name='Map' component={MapScreen} />
      <BottomTabs.Screen name='Flight' component={FlightScreen} />
      <BottomTabs.Screen name='Hotel' component={HotelScreen} />
    </BottomTabs.Navigator>
  );
}

export default Tabs;
