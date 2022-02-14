import { Tab } from "./actionTypes";

const { TAB_SWITCH } = Tab;

export const tabSwitch = (tab) => ({
  type: TAB_SWITCH,
  tab,
});
