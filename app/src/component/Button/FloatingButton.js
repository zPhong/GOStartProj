/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// @flow

import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import { IconList } from "Assets/icons";
import type { ____ViewStyleProp_Internal as Style } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type ButtonColor = {
  normal?: string,
  deactive?: string,
  pressed?: string,
  title?: string
};

type IconConfig = { name?: string, width?: number, height?: number };

type Props = {
  width?: number,
  color?: ButtonColor,
  title?: string,
  icon?: IconConfig,
  active?: boolean,
  onPress: () => void,
  onLongPress?: () => void,
  style?: Style
};

type State = {
  btnColor: string
};

export default class FloatingButton extends React.Component<Props, State> {
  static defaultProps = {
    active: true,
    icon: {
      name: "none",
      width: 0,
      height: 0
    },
    title: "Click me!",
    width: undefined,
    color: {
      normal: "#1154ff",
      deactive: "#abb5c4",
      pressed: "#1154ff",
      title: "white"
    },
    onLongPress: () => {},
    style: undefined
  };

  state = {
    btnColor: this.props.color.normal
  };

  onPressIn = () => {
    if (this.props.color.pressed === undefined) return;
    this.setState({ btnColor: this.props.color.pressed });
  };

  onPressOut = () => {
    this.setState({
      btnColor: this.props.color.normal
    });
  };

  render() {
    const {
      onPress,
      onLongPress,
      color,
      width,
      active,
      icon,
      title,
      style
    } = this.props;
    return (
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        disabled={!active}
        style={style === undefined ? FloatingButtonStyle.position : style}
      >
        <View
          style={[
            FloatingButtonStyle.container,
            width === undefined ? {} : { width },
            IconList[icon.name] === undefined
              ? {}
              : { justifyContent: "space-between", paddingLeft: 21 },
            {
              backgroundColor: !active ? color.deactive : this.state.btnColor
            }
          ]}
        >
          {IconList[icon.name] === undefined
            ? null
            : IconList[icon.name]({
                width: icon.width,
                height: icon.height,
                color: color.title
              })}
          <Text style={[FloatingButtonStyle.title, { color: color.title }]}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const FloatingButtonStyle = StyleSheet.create({
  position: {
    position: "absolute",
    alignSelf: "center",
    bottom: "4.3%"
  },
  container: {
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#5807007d",
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    flexDirection: "row",
    paddingHorizontal: 18
  },
  title: {
    fontSize: 18,
    textAlign: "center"
  }
});
