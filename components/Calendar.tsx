import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { imageStyles, styles } from '../styles';
import TripOverview from './TripOverview';

function Calendar() {
  return (
    <>
      <ImageBackground
        source={require('../assets/beach.png')}
        resizeMode='cover'
        style={[imageStyles.background]}
      >
        <View style={[styles.container]}>
          <Text>Map</Text>
        </View>
        <TripOverview />
      </ImageBackground>
    </>
  );
}

export default Calendar;
