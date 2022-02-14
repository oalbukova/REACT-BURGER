import { Button } from "./actionTypes";

const { SET_BTN_DISABLED, SET_BTN_ACTIVE } = Button;

export const setButtonDisabled = () => ({
  type: SET_BTN_DISABLED,
});

export const setButtonActive = () => ({
  type: SET_BTN_ACTIVE,
});
