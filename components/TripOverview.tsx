import React from 'react';
import { Text, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { tripOverviewStyles } from '../styles';
import Friends from './Friends';

const TRIP = {
  destination: 'Barcelona',
  departure: '1971-02-01T00:00:00.000Z',
  return: '2022-01-01T02:00:00.000Z',
  friends: [16, 15, 14, 13],
};

const FRIENDS_IMAGES = [
  'http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png',
  'https://freepngimg.com/thumb/shape/29779-8-circle-file.png',
  'https://pngimg.com/uploads/circle/circle_PNG12.png',
  'https://clipartion.com/wp-content/uploads/2015/11/circle-clipart-free-clip-art-images.png',
];

function TripOverview() {
  const tripStart = convertDateToDay(new Date(TRIP.departure));
  const tripEnd = convertDateToDay(new Date(TRIP.return));
  return (
    <View style={[tripOverviewStyles.container]}>
      <View style={[tripOverviewStyles.vertical]}>
        <Text style={[tripOverviewStyles.city]}>{TRIP.destination}</Text>
        <Text>
          {tripStart} - {tripEnd}
        </Text>
      </View>
      <View>
        <Friends friends={FRIENDS_IMAGES} size={40} />
      </View>
    </View>
  );
}

export default TripOverview;
