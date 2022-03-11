// reducer
import { buttonReducer } from "./button";

//constants
import { SET_BTN_DISABLED, SET_BTN_ACTIVE } from "../../constants";

const initialButtonState = {
  isBtnDisabled: false,
};

describe("button reducer", () => {
  it("should return the initial state", () => {
    expect(buttonReducer(undefined, {})).toEqual(initialButtonState);
  });
  it("should handle SET_BTN_DISABLED", () => {
    expect(
      buttonReducer(initialButtonState, {
        type: SET_BTN_DISABLED,
      })
    ).toEqual({
      isBtnDisabled: true,
    });
  });

  it("should handle SET_BTN_ACTIVE", () => {
    expect(
      buttonReducer(
        {
          isBtnDisabled: true,
        },
        {
          type: SET_BTN_ACTIVE,
        }
      )
    ).toEqual({
      isBtnDisabled: false,
    });
  });
});
