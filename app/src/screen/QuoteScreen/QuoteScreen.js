/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import FloatingButton from "Components/Button/FloatingButton";
import { QuoteBg } from "Assets/icons";
import { observer, inject } from "mobx-react";

type Props = {
  ThemeStore: any,
  config: {
    image: any,
    quote: {
      content: string,
      author: string
    }
  }
};

@inject("ThemeStore")
@observer
export default class QuoteScreen extends React.Component<Props> {
  static defaultProps = {
    config: {
      image: "",
      quote: {
        content: "Abc",
        author: "phong"
      }
    }
  };

  render() {
    const { ThemeStore } = this.props;

    return (
      <View style={QuoteStyle.container}>
        <Image
          source={this.props.config.image}
          style={QuoteStyle.image}
          resizeMode="stretch"
        />
        <View style={{ flex: 1 }}>
          <View style={QuoteStyle.content}>
            <QuoteBg />
            <Text style={QuoteStyle.quote}>
              {this.props.config.quote.content}
            </Text>
            <Text style={QuoteStyle.author}>
              {this.props.config.quote.author}
            </Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <FloatingButton
          title={"Continue"}
          active
          width={125}
          color={{
            normal: ThemeStore.themeColor.primary,
            deactive: "#BDBDBD",
            pressed: ThemeStore.themeColor.secondary,
            title: "white"
          }}
          onPress={() => {
            alert("Hết rồi");
          }}
        />
      </View>
    );
  }
}

const QuoteStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    flex: 1,
    width: "100%"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  quote: {
    marginTop: -74,
    textAlign: "center",
    fontSize: 24,
    color: "#314057"
  },
  author: {
    textAlign: "center",
    fontSize: 14,
    color: "#314057",
    marginTop: 25
  }
});
