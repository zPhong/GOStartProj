/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { View } from "react-native";
import { IconList } from "Assets/icons";

type Props = {
  timeout: number,
  color: {
    active: string,
    deactive: string
  },
  count: number,
  style?: Object | Array<Object>,
  onRef: any,
  runAfter: () => null
};

type State = {
  loadingDot: number
};

export default class LoadingBar extends React.Component<Props, State> {
  static defaultProps = {
    timeout: 10000,
    color: {
      active: "#abb5c4",
      deactive: "#ebeff7"
    },
    count: 5
  };
  constructor(props: any) {
    super(props);
    this.state = {
      loadingDot: 0
    };
  }

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  timer: any;

  //start loading animation
  start = () => {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        loadingDot: (prevState.loadingDot + 1) % this.props.count
      }));
    }, 400);

    //stop by some event without timing
    if (this.props.timeout !== -1) {
      setTimeout(() => {
        this.stop();
      }, this.props.timeout);
    }
  };

  stop = () => {
    clearInterval(this.timer);
    this.props.runAfter();
  };

  render() {
    const { count, style, color } = this.props;
    return (
      <View
        style={[
          {
            width: 88,
            height: 8,
            justifyContent: "space-between",
            flexDirection: "row"
          },
          style
        ]}
      >
        {Array(count)
          .fill(0)
          .map((value, index) => (
            <View key={`dot${index}`}>
              {IconList.dot({
                width: 8,
                height: 8,
                color:
                  index === this.state.loadingDot
                    ? color.active
                    : color.deactive
              })}
            </View>
          ))}
      </View>
    );
  }
}
