import React from 'react';
import { Text, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { iconStyles, styles, tripOverviewStyles } from '../styles';
import Friends from './Friends';
import { useTripContext } from '../contexts';

interface IProps {
  borderBottomColor: string;
}

function TripOverview({ borderBottomColor }: IProps) {
  const { tripDetails } = useTripContext();
  const tripStart = convertDateToDay(new Date(tripDetails.start));
  const tripEnd = convertDateToDay(new Date(tripDetails.end));
  const friends = tripDetails.Users?.map((user) => user.pictureUrl);

  return (
    <View
      style={[
        tripOverviewStyles.container,
        tripOverviewStyles.bottomBorder,
        { borderBottomColor },
      ]}
    >
      <View style={[tripOverviewStyles.vertical]}>
        <Text
          style={[
            tripOverviewStyles.city,
            tripOverviewStyles.textColor,
            styles.fontBold,
          ]}
        >
          {tripDetails.destination}
        </Text>
        <Text style={[tripOverviewStyles.textColor, styles.font]}>
          {tripStart} - {tripEnd}
        </Text>
      </View>
      <View>
        <Friends friends={friends} size={iconStyles.biggest} />
      </View>
    </View>
  );
}

export default TripOverview;
