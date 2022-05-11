export default function convertDateToDay(date: Date) {
  const monthButBackwards = date
    .toLocaleString('en-GB', {
      month: 'short',
      day: '2-digit',
    })
    .split(' ')
    .reverse()
    .join(' ');
  // Because day: '2-digit' doesn't seem to work
  if (monthButBackwards.length < 6) return '0' + monthButBackwards;
  return monthButBackwards;
}
