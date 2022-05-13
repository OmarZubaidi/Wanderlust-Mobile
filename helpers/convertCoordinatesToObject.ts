export default function convertCoordinatesToObjects(coordinates: string) {
  const coordinatesArray = coordinates.split(', ');
  return {
    latitude: parseFloat(coordinatesArray[0]),
    longitude: parseFloat(coordinatesArray[1]),
  };
}
