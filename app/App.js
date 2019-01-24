/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Provider } from "mobx-react";
import { SafeAreaView, View } from "react-native";
import store from "store";
import SplashScreen from "screen/SplashScreen/SplashScreen";
import CompanyCode from "screen/Login/CompanyCode";
import { LargeAppLogo, VisaLogo } from "Assets/Image";

const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: {
        screen: props => (
          <SplashScreen
            {...props}
            contentConfig={{
              logo: { image: LargeAppLogo, width: 287, height: 192 },
              nextScreen: "CompanyCode",
              timeout: 3000
            }}
          />
        ),
        navigationOptions: {
          header: null
        }
      },
      Main: {
        screen: createStackNavigator({
          CompanyCode: {
            screen: CompanyCode,
            navigationOptions: {
              header: null
            }
          },
          Loading: {
            screen: props => (
              <SplashScreen
                {...props}
                contentConfig={{
                  logo: { image: VisaLogo, width: 249, height: 105 },
                  nextScreen: "Login",
                  timeout: 30000,
                  loading: true
                }}
              />
            ),
            navigationOptions: {
              header: null
            }
          }
        }),
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
