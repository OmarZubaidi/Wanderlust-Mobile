import React from 'react';
import { Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { requestPermissionAndReturn } from '../helpers';
import { IEvent } from '../interfaces';
import { colorStyles, mapStyles } from '../styles';
import TripOverview from './TripOverview';

const LOCATION = {
  latitude: 51.5072,
  longitude: -0.1276,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.041,
};

const EVENTS = [
  {
    title: 'Lorem ipsum dolor',
    start: '2022-05-30T09:00:00.000Z',
    end: '2022-05-30T10:00:00.000Z',
    allDay: false,
    description: 'test',
    location: 'Barcelona',
    latitude: 51.5172,
    longitude: -0.1176,
    price: 0,
    eventApiId: 12323,
    bookingLink: 'LINK',
    type: 'Activity',
    pictures: 'reeeeee',
    rating: 3.2,
    tripId: 2,
  },
  {
    title: 'Wow second event',
    start: '2022-05-30T11:00:00.000Z',
    end: '2022-05-30T14:00:00.000Z',
    allDay: false,
    description: 'I dunno food or something',
    location: 'Barcelona',
    latitude: 51.4972,
    longitude: -0.1376,
    price: 10,
    eventApiId: 12332,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
];

// TODO Doesn't work, but does ask for permission
async function getUserLocation() {
  try {
    const permissionGranted = await requestPermissionAndReturn(
      'android.permission.ACCESS_FINE_LOCATION',
      {
        title: 'Location',
        message: 'Please allow fine location permission to enable map usage',
        buttonPositive: 'Enable',
      }
    );
    if (permissionGranted) {
      console.log('inside permissionGranted');
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Lat Lng', latitude, longitude);
        },
        (error) => {
          console.warn(`Error (${error.code}): ${error.message}`);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          timeout: 15000,
          maximumAge: 5000,
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function markerRenderer(event: IEvent) {
  const { eventApiId, latitude, longitude, title, description } = event;
  return (
    <Marker
      key={eventApiId}
      coordinate={{ latitude, longitude }}
      title={title}
      description={description}
      // TODO Add custom map markers using logo
      pinColor={Platform.OS === 'ios' ? colorStyles.beige : 'tan'}
    />
  );
}

interface IProps {
  route: any;
}

function Map({ route }: IProps) {
  console.log('component', route);
  return (
    <>
      <TripOverview borderBottomColor={colorStyles.white} />
      <MapView
        style={[mapStyles.styleObject.map]}
        customMapStyle={mapStyles.styling}
        initialRegion={LOCATION}
        userInterfaceStyle='light'
        onMapReady={getUserLocation}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
      >
        {EVENTS.map(markerRenderer)}
      </MapView>
    </>
  );
}

export default Map;
