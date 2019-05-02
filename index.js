import { AppRegistry, StatusBar } from 'react-native';
import App from './src/app';
import { Colors } from './src/common/styles';
import { name as appName } from './app.json';

if (__DEV__) {
  /* eslint no-undef: 0 no-global-assign: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
  console.disableYellowBox = true; // eslint-disable-line
}

StatusBar.setBackgroundColor(Colors.red);

AppRegistry.registerComponent(appName, () => App);
