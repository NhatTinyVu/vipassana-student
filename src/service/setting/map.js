import { Platform } from 'react-native';

export const mapToSetting = (setting = {}) => ({
  latestVersion: Platform.select({
    ios: setting.ios_version,
    android: setting.android_version,
  }),
  minVersion: Platform.select({
    ios: setting.ios_min_version,
    android: setting.android_min_version,
  }),
  iosURL: setting.ios_link,
  androidURL: setting.android_link,
});
