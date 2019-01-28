/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// @flow

import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import BorderTextInput from "Components/TextInput/BorderTextInput";
import FloatingButton from "Components/Button/FloatingButton";
import { GroveLogo } from "Assets/Image";
import { PRIMARY_COLOR } from "Assets/Color";
import { observer, inject } from "mobx-react";
import { Themelist } from "../../../data";

type Props = {
  navigation: any
};
type State = { code: string, active: boolean };

const config = [
  {
    color: PRIMARY_COLOR,
    placehoder: "Company Code",
    isHiding: false
  }
];

@inject("ThemeStore")
@observer
export default class CompanyCode extends React.Component<Props, State> {
  state = {
    code: "",
    active: false
  };

  onChangeText = (value: string) => {
    if (value !== "") this.setState({ active: true });
    else this.setState({ active: false });
    this.setState({ code: value });
  };

  onContinuePress = () => {
    if (this.checkCompanyCode(this.state.code)) {
      this.props.navigation.navigate("Loading");
    } else {
      alert("Error");
    }
  };

  checkCompanyCode = (code: string) => {
    if (code === "VISA") {
      this.props.ThemeStore.setThemeColor(Themelist.Visa);
      return true;
    }
    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "29.4%",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "6.5%"
          }}
        >
          <Image
            source={GroveLogo}
            style={{ width: 200, height: 70 }}
            resizeMode="contain"
          />
        </View>
        <BorderTextInput
          themeColor={PRIMARY_COLOR}
          contentConfig={config}
          fontSize={22}
          values={[this.state.code]}
          onChangeText={[this.onChangeText]}
        />

        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "#abb5c4", textAlign: "center" }}>
            Don’t know your company code?
          </Text>
        </TouchableOpacity>

        <FloatingButton
          title={"Continue"}
          width={197}
          active={this.state.active}
          color={{
            normal: PRIMARY_COLOR,
            deactive: "#BDBDBD",
            pressed: "#B2FF59",
            title: "white"
          }}
          onPress={this.onContinuePress}
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
