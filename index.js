/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screen/login/Login';
import ForgotPass from './src/screen/ForgotPass/ForgotPass';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ForgotPass);
