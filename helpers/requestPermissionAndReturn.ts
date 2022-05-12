import { Permission, PermissionsAndroid, Rationale } from 'react-native';

export default async function requestPermissionAndReturn(
  permission: Permission,
  rationale: Rationale
) {
  try {
    const permissionGranted = await PermissionsAndroid.check(permission);
    if (!permissionGranted) PermissionsAndroid.request(permission, rationale);
    const newPermissionGranted = await PermissionsAndroid.check(permission);
    return newPermissionGranted;
  } catch (error) {
    console.log(error);
  }
}
