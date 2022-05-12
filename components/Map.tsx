import React from 'react';
import { ImageBackground, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  convertCoordinatesToObjects,
  requestPermissionAndReturn,
} from '../helpers';
import { IEvent } from '../interfaces';
import { colorStyles, imageStyles, mapStyles } from '../styles';

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
    coordinates: '51.5172, -0.1176',
    price: 'free',
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
    coordinates: '51.4972, -0.1376',
    price: '10 €',
    eventApiId: 12332,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
];

// TODO Doesn't work, but does ask for permission
function getUserLocation() {
  const permissionGranted = requestPermissionAndReturn(
    'android.permission.ACCESS_FINE_LOCATION',
    {
      title: 'Location',
      message: 'Please allow fine location permission to enable map usage',
      buttonPositive: 'Enable',
    }
  );
  if (permissionGranted)
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
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

function markerRenderer(event: IEvent) {
  const { eventApiId, coordinates, title, description } = event;
  const coordinate = convertCoordinatesToObjects(coordinates);
  return (
    <Marker
      key={eventApiId}
      coordinate={coordinate}
      title={title}
      description={description}
      pinColor={Platform.OS === 'ios' ? colorStyles.beige : 'tan'}
    />
  );
}

function Map() {
  return (
    <>
      <ImageBackground
        source={require('../assets/map.jpg')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
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
      </ImageBackground>
    </>
  );
}

export default Map;
