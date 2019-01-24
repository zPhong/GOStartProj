/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import React from "react";
import { StyleSheet, View } from "react-native";
import BorderTextInput from "Components/TextInput/BorderTextInput";
import FloatingButton from "Components/Button/FloatingButton";

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

export default class Login extends React.Component<Props> {
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
        <FloatingButton
          title={"Login"}
          width={201}
          color={{
            normal: "#1154ff",
            deactive: "#BDBDBD",
            pressed: "#0D47A1",
            title: "white"
          }}
          onPress={() => {
            console.log("Clicked");
          }}
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
