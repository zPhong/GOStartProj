/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Provider } from "mobx-react";
import { SafeAreaView, View } from "react-native";
import store from "store";
import SplashScreen from "Screens/SplashScreen/SplashScreen";
import LoginStack from "Screens/Login/LoginStack";
import { LargeAppLogo } from "Assets/Image";

const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: {
        screen: props => (
          <SplashScreen
            {...props}
            contentConfig={{
              logo: { image: LargeAppLogo, width: 287, height: 192 },
              nextScreen: "LoginStack",
              timeout: 3000
            }}
          />
        ),
        navigationOptions: {
          header: null
        }
      },
      LoginStack: {
        screen: LoginStack,
        navigationOptions: {
          header: null
        }
      }
    },
    {
      initialRouteName: "SplashScreen"
    }
  )
);
// gets the current screen from navigation state

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider {...store}>
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ backgroundColor: "white" }} />
          <RootStack />
        </View>
      </Provider>
    );
  }
}
