export default function convertDateToDay(date: Date) {
  const monthButBackwards = date.toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
  });
  const day = '';
  return monthButBackwards.split(' ').reverse().join(' ');
}
