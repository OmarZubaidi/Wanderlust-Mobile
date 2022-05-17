import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ENV from '../config/env';
import { ITrip } from '../interfaces';
import { useUserContext } from './userContext';

export const emptyTrip = {
  id: undefined,
  start: '',
  end: '',
  destination: '',
  longitude: 0,
  latitude: 0,
  Events: [],
  Users: [],
  Flights: [],
  Hotels: [],
};

interface ITripContext {
  tripDetails: ITrip;
  setTripDetails: (userDetails: ITrip) => void;
}

const TripContext = createContext<ITripContext>({
  tripDetails: emptyTrip,
  setTripDetails: () => {},
});

export function useTripContext() {
  return useContext(TripContext);
}

export const TripProvider = (props: any) => {
  const [tripDetails, setTripDetails] = useState<ITrip>(emptyTrip);
  const { userDetails } = useUserContext();
  useEffect(() => {
    if (userDetails?.Trips?.length) {
      fetchTrip();
    }
  }, [userDetails]);

  function fetchTrip() {
    if (!userDetails.Trips) {
      setTripDetails(emptyTrip);
      return;
    }
    const nextTrip = userDetails.Trips.filter(
      (trip) => Date.parse(trip.start) > Date.now()
    ).sort(
      (tripA, tripB) => Date.parse(tripA.start) - Date.parse(tripB.start)
    )[0];
    const tripId = nextTrip?.id;
    axios
      .get(`${ENV.apiUrl}/trips/${tripId}`)
      .then((response) => setTripDetails(response.data))
      .catch((error) => Alert.alert(error));
  }

  return (
    <TripContext.Provider value={{ tripDetails, setTripDetails }} {...props} />
  );
};

export default TripProvider;
