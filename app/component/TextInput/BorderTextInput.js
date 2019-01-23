/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import React from "react";

import {
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  Dimensions
} from "react-native";

import { IconList } from "Icons";

type Props = {
  themeColor: string,
  contentConfig: Array<{
    icon: string,
    width: number,
    height: number,
    placehoder: string,
    isHiding: boolean
  }>,
  style?: StyleSheet.Styles,
  value: string,
  onChangeText: string => null
};

const ITEM_HEIGHT = 64;

export default class BorderTextInput extends React.Component<Props> {
  static defaultProps = {
    themeColor: "black",
    contentConfig: [
      {
        icon: "email",
        placehoder: "Input somthing",
        isHiding: false,
        width: 20,
        height: 20
      }
    ],
    value: undefined,
    onChangedText: () => {}
  };

  renderContent() {
    const { icon, themeColor, value, onChangeText } = this.props;
    return this.props.contentConfig.map((config, index) => (
      <View key={`textinput${index}`} style={TextInputStyle.container}>
        {IconList[a]({
          width: config.width,
          height: config.width,
          color: themeColor
        })}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={config.isHiding}
          placeholder={config.placehoder}
          placeholderTextColor={"#64231b40"}
          style={TextInputStyle.textInput}
        />
      </View>
    ));
  }

  render() {
    const { themeColor, style, icon, contentConfig } = this.props;

    console.log(IconList[icon]);
    return (
      <View
        style={[
          TextInputStyle.border,
          { borderColor: themeColor },
          style,
          { height: contentConfig.length * ITEM_HEIGHT }
        ]}
      />
    );
  }
}

const TextInputStyle = StyleSheet.create({
  border: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  container: {
    flexDirection: "row"
  },
  textInput: {
    fontSize: 16,
    color: "black"
  }
});
