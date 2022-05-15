import { AgendaSchedule } from 'react-native-calendars';
import { IEvent } from '../interfaces';

export default function formatEvents(events: IEvent[]) {
  const formattedEvents = events.map((event) => {
    const day = event.start.split('T')[0];
    const start = event.start.split('T')[1].slice(0, 5);
    const end = event.end.split('T')[1].slice(0, 5);
    const name = event.title;
    const price = event.price;
    const description = event.description;
    const latitude = event.latitude;
    const longitude = event.longitude;
    const height = 0;
    return {
      name,
      description,
      price,
      day,
      height,
      start,
      end,
      latitude,
      longitude,
    };
  });
  const returnValue: AgendaSchedule = {};
  formattedEvents.forEach((event) => {
    if (!returnValue[event.day]) returnValue[event.day] = [event];
    else returnValue[event.day].push(event);
  });
  return returnValue;
}

function dateStringToTimestamp(date: string) {
  return new Date(date.replace('Z', '')).getTime();
}
