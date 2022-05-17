import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { convertDateToDay } from '../helpers';
import { iconStyles, styles, touchableStyles, tripStyles } from '../styles';
import Friends from './Friends';
import { useTripContext } from '../contexts';
import { TripSelector } from '../components';
interface IProps {
  borderBottomColor: string;
}

function TripOverview({ borderBottomColor }: IProps) {
  const { tripDetails } = useTripContext();
  const tripStart = convertDateToDay(new Date(tripDetails.start));
  const tripEnd = convertDateToDay(new Date(tripDetails.end));
  const friends = tripDetails.Users
    ? tripDetails.Users?.map((user) => user.pictureUrl)
    : [];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={[
        tripStyles.container,
        tripStyles.bottomBorder,
        { borderBottomColor },
      ]}
    >
      <TouchableOpacity
        activeOpacity={touchableStyles}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={[tripStyles.vertical]}>
          <Text
            style={[tripStyles.city, tripStyles.textColor, styles.fontBold]}
          >
            {tripDetails.destination}
          </Text>
          <Text style={[tripStyles.textColor, styles.font]}>
            {tripStart} - {tripEnd}
          </Text>
        </View>
      </TouchableOpacity>
      <TripSelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View>
        <Friends friends={friends} size={iconStyles.biggest} />
      </View>
    </View>
  );
}

export default TripOverview;
