import { AppRegistry, StatusBar } from 'react-native';
import App from './src/containers/app';
import { Colors } from './src/config/styles';
import { name as appName } from './app.json';

if (__DEV__) {
  /* eslint no-undef: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
  console.disableYellowBox = true; // eslint-disable-line no-console
}

StatusBar.setBackgroundColor(Colors.red);

AppRegistry.registerComponent(appName, () => App);
