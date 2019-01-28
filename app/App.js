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
import QuoteScreen from "./src/screen/QuoteScreen/QuoteScreen";
import { bgQuote } from "./assets/Image";

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
      },
      Quote: {
        screen: props => (
          <QuoteScreen
            {...props}
            config={{
              image: bgQuote,
              quote: {
                content:
                  "Aim for the moon. If you miss,\n you may hit the star.",
                author: "W. Clement Stone"
              }
            }}
          />
        ),
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
type State = { currentScreen: string };
export default class App extends React.Component<Props, State> {
  state = {
    currentScreen: "SplashScreen"
  };

  getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  renderSafeArea() {
    if (this.state.currentScreen === "Quote") return null;
    return <SafeAreaView style={{ backgroundColor: "white" }} />;
  }

  render() {
    return (
      <Provider {...store}>
        <View style={{ flex: 1 }}>
          {this.renderSafeArea()}
          <RootStack
            onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = this.getCurrentRouteName(currentState);
              this.setState({ currentScreen });
            }}
          />
        </View>
      </Provider>
    );
  }
}
