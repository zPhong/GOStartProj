/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// @flow

import React from "react";

import { View, TextInput, StyleSheet } from "react-native";

import { IconList } from "Assets/icons";
import type { TextInputConfig } from "GOStartProj/app/type";
import type { ____ViewStyleProp_Internal as Style } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  themeColor: string,
  contentConfig: Array<TextInputConfig>,
  textColor?: string,
  placeholderColor?: string,
  style?: Style,
  fontSize?: number,
  values: Array<string>,
  onChangeText: any
};

const ITEM_HEIGHT = 64;

export default class BorderTextInput extends React.Component<Props> {
  static defaultProps = {
    themeColor: "black",
    contentConfig: [
      {
        icon: "none",
        placehoder: "Input somthing",
        isHiding: false,
        width: 20,
        height: 15
      }
    ],
    textColor: "black",
    placeholderColor: "#64231b40",
    values: undefined,
    onChangedText: undefined
  };

  renderContent(): Array<any> {
    const {
      values,
      onChangeText,
      textColor,
      placeholderColor,
      fontSize
    } = this.props;

    return this.props.contentConfig.map((config: any, index: number) => (
      <View
        key={`textinput${index}`}
        style={[
          TextInputStyle.container,
          { color: textColor },
          IconList[config.icon] === undefined
            ? {}
            : { justifyContent: "flex-start", paddingLeft: 21 }
        ]}
      >
        {IconList[config.icon] === undefined
          ? null
          : IconList[config.icon]({
              width: config.width,
              height: config.height,
              color: config.color
            })}
        <TextInput
          value={values[index]}
          onChangeText={onChangeText[index]}
          secureTextEntry={config.isHiding}
          placeholder={config.placehoder}
          placeholderTextColor={placeholderColor}
          style={[
            TextInputStyle.textInput,
            { fontSize },
            IconList[config.icon] === undefined
              ? { textAlign: "center" }
              : { marginLeft: 19 }
          ]}
        />
      </View>
    ));
  }

  render() {
    const { themeColor, style, contentConfig } = this.props;

    return (
      <View style={style}>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 32,
            height: contentConfig.length * ITEM_HEIGHT
          }}
        >
          <View style={[TextInputStyle.border, { borderColor: themeColor }]}>
            {this.renderContent()}
          </View>
        </View>
      </View>
    );
  }
}

const TextInputStyle = StyleSheet.create({
  border: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "black"
  }
});
