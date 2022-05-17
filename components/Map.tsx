import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { IEvent } from '../interfaces';
import { colorStyles, mapStyles } from '../styles';
import TripOverview from './TripOverview';
import ENV from '../config/env';
import { useTripContext } from '../contexts';

function markerRenderer(event: IEvent) {
  const { eventApiId, latitude, longitude, title, description, type } = event;
  const maxLength = 30;
  const titleLength = title.length;
  const descriptionLength = description.length;
  let trimmedTitle = title.slice(0, Math.min(title.length, maxLength));
  trimmedTitle = titleLength > maxLength ? trimmedTitle + '...' : trimmedTitle;
  let trimmedDescription = description.slice(
    0,
    Math.min(description.length, maxLength)
  );
  trimmedDescription =
    descriptionLength > maxLength
      ? trimmedDescription + '...'
      : trimmedDescription;

  return (
    <Marker
      key={eventApiId}
      anchor={{ x: 0.5, y: 1 }}
      coordinate={{ latitude, longitude }}
      title={trimmedTitle}
      description={trimmedDescription}
      style={{ width: 10 }}
      tracksViewChanges={true}
      // TODO Add hotel, restaurant location markerRenderer
      icon={
        type === 'RESTAURANT'
          ? require('../assets/markerRestaurant.png')
          : type === 'HOTEL'
          ? require('../assets/markerHotel.png')
          : require('../assets/markerEvent.png')
      }
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
  const { tripDetails } = useTripContext();

  const LOCATION = {
    latitude: tripDetails.latitude,
    longitude: tripDetails.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.041,
  };

  async function getUserLocation() {
    try {
      const permissionGranted =
        await Location.requestForegroundPermissionsAsync();
      if (permissionGranted) {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
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
        style={[mapStyles.map]}
        initialRegion={LOCATION}
        userInterfaceStyle='light'
        onMapReady={getUserLocation}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        tintColor={colorStyles.red}
      >
        {tripDetails.Events ? tripDetails.Events.map(markerRenderer) : <></>}
        {route.params && (
          <MapViewDirections
            origin={userLocation}
            destination={route.params}
            apikey={ENV.googleMapsApiKey}
            strokeWidth={5}
            strokeColor={colorStyles.red}
          />
        )}
      </MapView>
    </>
  );
}

export default Map;
