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

const EmailIcon = (props: Props) => (
  <Svg width={25} height={19} {...props} viewBox="0 0 25 19">
    <Path
      fill={props.color}
      d="M0 2v15a2 2 0 0 0 2 2h21a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 
      2 0 0 0-2 2zm4.147.111h16.706L12.5 8.214 4.147 
      2.11zm-2.224.924L11.96 10.39a.97.97 0 0 0 1.082 0l10.036-7.356v13.854H1.923V3.035z"
    />
  </Svg>
);

export { EmailIcon };
