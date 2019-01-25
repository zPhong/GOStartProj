/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */

import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  width: number,
  height: number,
  color: string
};

const BackIcon = (props: Props) => (
  <Svg width={12} height={22} {...props} viewBox="160 96 192 320">
    <Path
      fill={props.color}
      d="M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"
    />
  </Svg>
);

export { BackIcon };
