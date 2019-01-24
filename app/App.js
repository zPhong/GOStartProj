/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import BorderTextInput from "./component/TextInput/BorderTextInput";

type Props = {};
type State = { email: string, password: string };

const config = [
  {
    icon: "email",
    width: 20,
    height: 15,
    color: "#1154ff",
    placehoder: "Email",
    isHiding: false
  },
  {
    icon: "password",
    width: 16,
    height: 20,
    color: "#000000",
    placehoder: "Password",
    isHiding: true
  }
];

export default class App extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail = (value: string) => {
    this.setState({ email: value });
  };

  onChangePassword = (value: string) => {
    this.setState({ password: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <BorderTextInput
          themeColor={"#1154ff"}
          contentConfig={config}
          values={[this.state.email, this.state.password]}
          onChangeText={[this.onChangeEmail, this.onChangePassword]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
