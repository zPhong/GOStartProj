/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import BorderTextInput from "Components/TextInput/BorderTextInput";
import FloatingButton from "Components/Button/FloatingButton";
import { VisaLogo } from "Assets/Image";
import { observer, inject } from "mobx-react";
import { IconList } from "Assets/icons";

type Props = {};
type State = { email: string, password: string, active: boolean };

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

@inject("ThemeStore")
@observer
export default class Login extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail = (value: string) => {
    if (value !== "" && this.state.password !== "") {
      this.setState({ active: true });
    } else this.setState({ active: false });

    this.setState({ email: value });
  };

  onChangePassword = (value: string) => {
    if (value !== "" && this.state.email !== "") {
      this.setState({ active: true });
    } else this.setState({ active: false });

    this.setState({ password: value });
  };

  onLogin = () => {
    const result = this.checkAuth();
    if (result) {
      this.props.navigation.navigate("Quote");
    } else {
      alert("Username or Password incorrect");
    }
  };

  onBack = () => {
    console.log("A");
    this.props.navigation.popToTop();
  };

  checkAuth = () => {
    if (this.state.email === "Phongluc") return true;
    return false;
  };

  render() {
    const { ThemeStore } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          hitSlop={{
            top: 19,
            left: 20,
            bottom: 19,
            right: 20
          }}
          style={{
            position: "absolute",
            top: 19,
            left: 20,
            width: 12,
            height: 22
          }}
          onPress={this.onBack}
        >
          {IconList.back({ color: "#446595" })}
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: "29.4%",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "6.6%",
            marginBottom: "6.5%"
          }}
        >
          <Image
            source={VisaLogo}
            style={{ width: 201, height: 80.5 }}
            resizeMode="contain"
          />
        </View>

        <BorderTextInput
          themeColor={ThemeStore.themeColor.primary}
          contentConfig={config}
          values={[this.state.email, this.state.password]}
          onChangeText={[this.onChangeEmail, this.onChangePassword]}
        />

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "#abb5c4", textAlign: "center" }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <FloatingButton
          title={"Login"}
          active={this.state.active}
          width={201}
          color={{
            normal: ThemeStore.themeColor.primary,
            deactive: "#BDBDBD",
            pressed: ThemeStore.themeColor.secondary,
            title: "white"
          }}
          onPress={this.onLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
  }
});
