import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { iconStyles, styles, tripOverviewStyles } from '../styles';
import Friends from './Friends';
import { useTripContext } from '../contexts';
import { TripSelector } from '../screens';
interface IProps {
  borderBottomColor: string;
}

function TripOverview({ borderBottomColor }: IProps) {
  const { tripDetails } = useTripContext();
  const tripStart = convertDateToDay(new Date(tripDetails.start));
  const tripEnd = convertDateToDay(new Date(tripDetails.end));
  const friends = tripDetails.Users?.map((user) => user.pictureUrl);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={[
        tripOverviewStyles.container,
        tripOverviewStyles.bottomBorder,
        { borderBottomColor },
      ]}
    >
      <TripSelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
      </TouchableOpacity>
      <View>
        <Friends friends={friends} size={iconStyles.biggest} />
      </View>
    </View>
  );
}

export default TripOverview;
