/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */

import React from "react";
import Svg, { Circle } from "react-native-svg";

type Props = {
  width?: number,
  height?: number,
  color?: string
};

const DotIcon = (props: Props) => (
  <Svg width={8} height={8} {...props} viewBox="0 0 8 8">
    <Circle cx={"4"} cy={"4"} r={"4"} fill={props.color} />
  </Svg>
);

export { DotIcon };
