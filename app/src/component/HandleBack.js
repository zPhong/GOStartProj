/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { withNavigation } from "react-navigation";
import { BackHandler } from "react-native";

type Props = {};

class HandleBack extends React.Component {
  constructor(props) {
    super(props);
    this.didFocus = props.navigation.addListener("didFocus", () =>
      BackHandler.addEventListener("hardwareBackPress", this.onBack)
    );
  }

  componentDidMount() {
    this.willBlur = this.props.navigation.addListener("willBlur", () =>
      BackHandler.removeEventListener("hardwareBackPress", this.onBack)
    );
  }

  componentWillUnmount() {
    this.didFocus.remove();
    this.willBlur.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.onBack);
  }

  onBack = () => this.props.onBack();

  render() {
    return this.props.children;
  }
}

export default withNavigation(HandleBack);
