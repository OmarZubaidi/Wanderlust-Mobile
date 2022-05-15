import React from 'react';
import { Text, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { ITrip } from '../interfaces';
import { iconStyles, tripOverviewStyles } from '../styles';
import Friends from './Friends';

const TRIP: ITrip = {
  start: '2022-05-30T00:00:00.000Z',
  end: '2022-06-02T12:00:00.000Z',
  destination: 'Barcelona',
  latitude: 41.390205,
  longitude: 2.154007,
};

const FRIENDS_IMAGES = [
  'http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png',
  'https://freepngimg.com/thumb/shape/29779-8-circle-file.png',
  'https://pngimg.com/uploads/circle/circle_PNG12.png',
  'https://clipartion.com/wp-content/uploads/2015/11/circle-clipart-free-clip-art-images.png',
];

interface IProps {
  borderBottomColor: string;
}

function TripOverview({ borderBottomColor }: IProps) {
  const tripStart = convertDateToDay(new Date(TRIP.start));
  const tripEnd = convertDateToDay(new Date(TRIP.end));
  return (
    <View
      style={[
        tripOverviewStyles.container,
        tripOverviewStyles.bottomBorder,
        { borderBottomColor },
      ]}
    >
      <View style={[tripOverviewStyles.vertical]}>
        <Text style={[tripOverviewStyles.city, tripOverviewStyles.textColor]}>
          {TRIP.destination}
        </Text>
        <Text style={[tripOverviewStyles.textColor]}>
          {tripStart} - {tripEnd}
        </Text>
      </View>
      <View>
        <Friends friends={FRIENDS_IMAGES} size={iconStyles.biggest} />
      </View>
    </View>
  );
}

export default TripOverview;
