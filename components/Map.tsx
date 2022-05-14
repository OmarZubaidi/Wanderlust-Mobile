import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { IEvent } from '../interfaces';
import { colorStyles, mapStyles } from '../styles';
import TripOverview from './TripOverview';
import ENV from '../config/env';

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

function markerRenderer(event: IEvent) {
  const { eventApiId, latitude, longitude, title, description } = event;
  return (
    <Marker
      key={eventApiId}
      anchor={{ x: 0.5, y: 1 }}
      coordinate={{ latitude, longitude }}
      title={title}
      description={description}
      style={{ width: 10 }}
      tracksViewChanges={true}
      onPress={(item) => {
        console.log(item.nativeEvent.coordinate);
      }}
      icon={require('../assets/pinSmall.png')}
    />
  );
}

interface IProps {
  route: any;
}

function Map({ route }: IProps) {
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  async function getUserLocation() {
    try {
      const permissionGranted =
        await Location.requestForegroundPermissionsAsync();
      if (permissionGranted) {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        // TODO Yay. Now do something with it.
        setUserLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        tintColor={colorStyles.red}
      >
        {EVENTS.map(markerRenderer)}
        {route.params && (
          <MapViewDirections
            origin={userLocation}
            destination={route.params}
            apikey={ENV.googleMapsApiKey}
            strokeWidth={5}
            strokeColor={colorStyles.beige}
          />
        )}
      </MapView>
    </>
  );
}

export default Map;
