import { SET_BTN_DISABLED, SET_BTN_ACTIVE } from "../constants";


export interface IButtonDisabledAction {
  readonly type: typeof SET_BTN_DISABLED;
}

export interface IButtonActiveAction {
  readonly type: typeof SET_BTN_ACTIVE;
}

export type TButtonActions =
  IButtonDisabledAction |
  IButtonActiveAction;

export const setButtonDisabled = (): IButtonDisabledAction => ({
  type: SET_BTN_DISABLED
});

export const setButtonActive = (): IButtonActiveAction => ({
  type: SET_BTN_ACTIVE
});
