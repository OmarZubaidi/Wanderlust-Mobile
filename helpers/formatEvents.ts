import { AgendaSchedule } from 'react-native-calendars';
import { IEvent } from '../interfaces';

export default function formatEvents(events: IEvent[]) {
  const formattedEvents = events.map((event) => {
    const day = event.start.split('T')[0];
    const start = event.start.split('T')[1].slice(0, -1);
    const end = event.end.split('T')[1].slice(0, -1);
    const name = event.title;
    const height =
      (dateStringToTimestamp(event.end) - dateStringToTimestamp(event.start)) /
      ((60 * 60 * 1000) / 80);
    return { name, day, height, start, end };
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
