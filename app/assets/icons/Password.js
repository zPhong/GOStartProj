/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */

import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number,
  height?: number,
  color?: string
};

const PasswordIcon = (props: Props) => (
  <Svg width={20} height={26} {...props} viewBox="0 0 20 26">
    <Path
      fill={props.color}
      d="M10 0C6.145 0 3 3.145 3 7v3H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-1V7c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5v3H5V7c0-2.773 2.227-5 5-5zM2 12h16v12H2V12zm4 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
    />
  </Svg>
);

export { PasswordIcon };
