import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ENV from '../config/env';
import { useUserContext } from './userContext';

const TripContext = React.createContext<any>({
  id: null,
  start: '',
  end: '',
  destination: '',
  longitude: '',
  latitude: '',
  Events: [],
  Users: [],
  Flights: [],
  Hotels: [],
});

export function useTripContext() {
  return useContext(TripContext);
}

interface IProps {
  children: any;
}

export const TripProvider = ({ children }: IProps) => {
  const [tripDetails, setTripDetails] = useState<any>({
    id: null,
    start: '',
    end: '',
    destination: '',
    longitude: '',
    latitude: '',
    Events: [],
    Users: [],
    Flights: [],
    Hotels: [],
  });
  const { userDetails } = useUserContext();
  //fetch first trip, TODO: fetch trip details based on selected one
  useEffect(() => {
    if (userDetails.Trips && userDetails.Trips.length) {
      fetchTrip();
    }
  }, [userDetails]);

  function fetchTrip() {
    const nextTrip = userDetails.Trips.filter(
      trip => Date.parse(trip.start) > Date.now()
    ).sort(
      (tripA, tripB) => Date.parse(tripA.start) - Date.parse(tripB.start)
    )[0];
    const tripId = nextTrip?.id;
    axios
      .get(`${ENV.apiUrl}/trips/${tripId}`)
      .then(response => setTripDetails(response.data))
      .catch(error => Alert.alert(error));
  }

  const value = { tripDetails, setTripDetails };
  return (
    <TripContext.Provider value={value}>
      <>{children}</>
    </TripContext.Provider>
  );
};

export default TripProvider;
