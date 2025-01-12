/**
 * @format
 */
// App.js

import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
