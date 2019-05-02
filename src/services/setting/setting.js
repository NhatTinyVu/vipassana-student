import Storage from 'services/storage';
// import { initialSettings } from 'common/constants';
// import { omit, last } from 'lodash';
// import versions from './version';

// const storage = Storage.getInstance();
// const latestVersion = last(versions);

// const key = 'Settings';
// const initial = {
//   storageVersion: latestVersion,
//   ...initialSettings,
// };

// const isOutdate = currentVersion => latestVersion > currentVersion;

// const exportData = data => {
//   const keys = Object.keys(initial);
//   const result = {};
//   keys.forEach(dataKey => {
//     result[dataKey] = data[dataKey];
//   });
//   return omit({ ...initial, ...result }, 'version');
// };

// const importData = data => {
//   const keys = Object.keys(initial);
//   const result = {};
//   keys.forEach(dataKey => {
//     result[dataKey] = data[dataKey];
//   });
//   return { ...initial, ...result };
// };

// export const reset = () => {
//   storage.remove({ key });
// };

// export const get = () =>
//   new Promise(resolve => {
//     storage
//       .load({ key })
//       .then(data => {
//         if (isOutdate(data.version)) {
//           set(initial);
//           resolve(exportData(initial));
//         } else resolve(exportData(data));
//       })
//       .catch(() => {
//         set(initial);
//         resolve(exportData(initial));
//       });
//   });

// export const set = async (data = {}) => {
//   const savedData = await get();
//   const mergedData = importData({
//     ...savedData,
//     ...data,
//   });
//   storage.save({ key, data: mergedData });
//   return Promise.resolve(mergedData);
// };
