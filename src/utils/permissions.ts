import {Platform} from 'react-native';

import {checkMultiple, PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';

const PLATFORM_CAMERA_PERMISSIONS = {
  android: [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
  ios: [PERMISSIONS.IOS.CAMERA],
} as never;

const PLATFORM_PHOTO_LIBRARY_PERMISSIONS = {
  android: [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
  ios: [PERMISSIONS.IOS.PHOTO_LIBRARY],
} as never;

const PLATFORM_BLUETOOTH_PERMISSIONS = {
  android: [PERMISSIONS.ANDROID.BLUETOOTH_CONNECT, PERMISSIONS.ANDROID.BLUETOOTH_SCAN],
  ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
} as never;

const PLATFORM_LOCATION_PERMISSIONS = {
  android: [PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
  ios: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
} as never;

const REQUEST_PERMISSION_TYPE = {
  bluetooth: PLATFORM_BLUETOOTH_PERMISSIONS,
  camera: PLATFORM_CAMERA_PERMISSIONS,
  location: PLATFORM_LOCATION_PERMISSIONS,
  photo: PLATFORM_PHOTO_LIBRARY_PERMISSIONS,
} as never;

const PERMISSION_TYPE = {
  bluetooth: 'bluetooth',
  camera: 'camera',
  location: 'location',
  photo: 'photo',
};

class AppPermission {
  checkPermission = async (type: string) => {
    try {
      const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
      const statuses = await checkMultiple(permissions);
      const isAllGranted = Object.entries(statuses)
        .map(item => item[1])
        .every(item => item === RESULTS.GRANTED);
      if (isAllGranted) {
        return true;
      }
      return this.requestPermission(permissions);
    } catch (error) {
      console.error('checkPermission error', error);
      return false;
    }
  };

  requestPermission = async (permissions: never) => {
    try {
      const statuses = await requestMultiple(permissions);
      const isAllGranted = Object.entries(statuses)
        .map(item => item[1])
        .every(item => item === RESULTS.GRANTED);
      return isAllGranted;
    } catch (error) {
      console.error('requestPermission error', error);
      return false;
    }
  };
}

const Permission = new AppPermission();
export {Permission, PERMISSION_TYPE};
