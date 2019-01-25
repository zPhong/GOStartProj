/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { createStackNavigator } from "react-navigation";
import SplashScreen from "Screens/SplashScreen/SplashScreen";
import CompanyCode from "Screens/Login/CompanyCode";
import Login from "Screens/Login/Login";
import { VisaLogo } from "Assets/Image";
import HandleBack from "Components/HandleBack";

const Stack = createStackNavigator({
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
          timeout: 3000,
          loading: true
        }}
      />
    ),
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

type Props = {
  navigation: any
};

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default class LoginStack extends React.Component<Props> {
  static router = Stack.router;

  onBack = () => {
    const currentScreen = getActiveRouteName(this.props.navigation.state);
    if (currentScreen === "Login") {
      this.props.navigation.pop(2); //Call goBack from Loading route
    }
    return true;
  };

  render() {
    return (
      <HandleBack onBack={this.onBack}>
        <Stack {...this.props} />
      </HandleBack>
    );
  }
}
