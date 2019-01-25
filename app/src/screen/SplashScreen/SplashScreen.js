/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { GroveLogo } from "Assets/Image";
import { IconList } from "Assets/icons";

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

type State = {
  loadingDot: number
};

export default class SplashScreen extends React.Component<Props> {
  static defaultProps = {
    contentConfig: {
      loading: false,
      timeout: 3000,
      nextScreen: undefined
    }
  };

  constructor(props: any) {
    super(props);
    this.state = {
      loadingDot: 0,
      active: false
    };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState(prevState => ({
        loadingDot: (prevState.loadingDot + 1) % DOT_COUNT
      }));
    }, 400);

    setTimeout(() => {
      clearInterval(timer);
      this.props.navigation.navigate(this.props.contentConfig.nextScreen);
    }, this.props.contentConfig.timeout);
  }

  renderLoading() {
    return (
      <View style={SplashScreenStyle.loadingBar}>
        {Array(DOT_COUNT)
          .fill(0)
          .map((value, index) => (
            <View key={`dot${index}`}>
              {IconList.dot({
                width: 8,
                height: 8,
                color: index === this.state.loadingDot ? "#abb5c4" : "#ebeff7"
              })}
            </View>
          ))}
      </View>
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
