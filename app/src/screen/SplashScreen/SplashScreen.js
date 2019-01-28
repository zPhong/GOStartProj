/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { GroveLogo } from "Assets/Image";
import LoadingBar from "./LoadingBar";

const DOT_COUNT = 5;

type Props = {
  contentConfig: {
    logo: {
      image: any,
      width: number,
      height: number
    },
    loading: boolean,
    timeout: number,
    nextScreen: string
  },
  navigation: any
};

export default class SplashScreen extends React.Component<Props> {
  static defaultProps = {
    contentConfig: {
      loading: false,
      timeout: 3000,
      nextScreen: undefined
    }
  };

  componentDidMount() {
    if (!this.props.contentConfig.loading) {
      setTimeout(() => {
        this.props.navigation.navigate(this.props.contentConfig.nextScreen);
      }, this.props.contentConfig.timeout);
    } else {
      this.loadingBar.start();
    }
  }

  loadingBar: LoadingBar;

  navigateToNextScreen: any = () => {
    this.props.navigation.navigate(this.props.contentConfig.nextScreen);
  };

  renderLoading() {
    return (
      <LoadingBar
        onRef={ref => (this.loadingBar = ref)}
        timeout={this.props.contentConfig.timeout}
        style={SplashScreenStyle.loadingBar}
        count={DOT_COUNT}
        runAfter={this.navigateToNextScreen}
      />
    );
  }

  render() {
    const { contentConfig } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} />
          <View style={SplashScreenStyle.largeLogoContainer}>
            <Image
              source={contentConfig.logo.image}
              style={{
                width: contentConfig.logo.width,
                height: contentConfig.logo.height
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 69
          }}
        >
          {contentConfig.loading ? this.renderLoading() : null}
          <Image
            source={GroveLogo}
            style={{ width: 133, height: 44 }}
            resizeMode="stretch"
          />
        </View>
      </View>
    );
  }
}

const SplashScreenStyle = StyleSheet.create({
  largeLogoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  loadingBar: {
    width: 88,
    height: 8,
    justifyContent: "space-between",
    marginBottom: 33,
    flexDirection: "row"
  }
});
