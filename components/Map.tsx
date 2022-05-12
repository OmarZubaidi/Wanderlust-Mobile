import React from 'react';
import { ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { IEvent } from '../interfaces';
import { imageStyles, mapStyles } from '../styles';
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
    coordinates: '51.5072, -0.1276',
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
    coordinates: '51.6072, -0.2276',
    price: '10 €',
    eventApiId: 12332,
    bookingLink: 'LINK',
    type: 'Restaurant',
    pictures: 'no',
    rating: 4.5,
    tripId: 2,
  },
];

function markerRenderer(event: IEvent) {
  const { eventApiId, coordinates, title, description } = event;
  const coordinatesArray = coordinates.split(', ');
  const coordinate = {
    latitude: parseFloat(coordinatesArray[0]),
    longitude: parseFloat(coordinatesArray[1]),
  };
  return (
    <Marker
      key={eventApiId}
      coordinate={coordinate}
      title={title}
      description={description}
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
        >
          {EVENTS.map(markerRenderer)}
        </MapView>
        <TripOverview />
      </ImageBackground>
    </>
  );
}

export default Map;
