import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTripContext, useUserContext } from '../contexts';
import { convertDateToDay } from '../helpers';
import { ITrip } from '../interfaces';
import { iconStyles, styles, tabStyles, tripStyles } from '../styles';
import colors from '../styles/colors';
import { CalendarIcon } from './Icons';

interface IProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

function TripSelector({ modalVisible, setModalVisible }: IProps) {
  const { fetchTripDetails } = useTripContext();
  const { userDetails } = useUserContext();

  function tripRenderer(trip: ITrip) {
    const { id, destination, start, end } = trip;
    return (
      <TouchableOpacity
        onPress={() => {
          fetchTripDetails(id!);
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[tripStyles.selectorContainer]}>
          <View>
            <Text
              style={[tripStyles.city, tripStyles.textColor, styles.fontBold]}
            >
              {destination}
            </Text>
          </View>
          <View style={[tripStyles.horizontal]}>
            <View style={[tripStyles.marginRight]}>
              <CalendarIcon color={colors.black} />
            </View>
            <Text style={[tripStyles.textColor, styles.font]}>
              {convertDateToDay(new Date(start))} -{' '}
              {convertDateToDay(new Date(end))}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <View style={[tripStyles.horizontal, tripStyles.separatorTitleView]}>
            <Image
              style={[
                {
                  width: iconStyles.biggest,
                  height: iconStyles.biggest,
                  marginRight: -iconStyles.normal,
                },
                { marginTop: -2 },
              ]}
              source={require('../assets/icon.png')}
            />
            <View style={[tripStyles.marginLeft]}>
              <Text style={[tripStyles.separatorTitle, styles.fontBold]}>
                {tabStyles.headerTitle}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <FlatList
          data={userDetails.Trips}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => tripRenderer(item)}
          ItemSeparatorComponent={() => (
            <View style={[tripStyles.separator]}></View>
          )}
        />
      </View>
    </Modal>
  );
}

export default TripSelector;
