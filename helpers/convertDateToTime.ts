export default function convertDateToTime(date: Date) {
  return date.toLocaleString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
}
