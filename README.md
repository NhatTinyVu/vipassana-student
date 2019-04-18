### Install
Read the doc folder first 

Currently, work for MAC OS only

    yarn


### How to remove cache
Only do this when needed

    watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache


### Run the project

#### iOS

##### Use Xcode (recommended)

Open folder `ios` and hit run button

Or run with command

    react-native run-ios

#### Android

##### Use Android Studio (recommended)

Open folder `android`, async gradle and hit run

Or run with command

    react-native run-android
