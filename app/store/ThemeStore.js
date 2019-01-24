/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { observable, action } from "mobx";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "Assets/Color";

type Props = {};

export default class LoginStore<Props> {
  @observable themeColor = {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR
  };

  @action.bound setThemeColor(color: { primary: string, secondary: string }) {
    this.themeColor = color;
  }
}
