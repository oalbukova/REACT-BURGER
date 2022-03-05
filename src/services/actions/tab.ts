// constants
import { TAB_SWITCH } from "../constants";


export interface ITabSwitchAction {
  readonly type: typeof TAB_SWITCH;
  readonly tab: string;
}

export type TTabActions =
  ITabSwitchAction;

export const tabSwitch = (tab: string): ITabSwitchAction => ({
  type: TAB_SWITCH,
  tab,
});
