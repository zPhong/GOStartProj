/** @format */

import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";
import BorderTextInput from "./app/component/TextInput/BorderTextInput";

AppRegistry.registerComponent(appName, () => BorderTextInput);
