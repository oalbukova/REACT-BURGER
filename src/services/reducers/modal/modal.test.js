// reducer
import { modalReducer } from "./modal";

// constants
import {
  CLOSE_ERR_MODAL,
  CLOSE_ORDER_MODAL,
  OPEN_ERR_MODAL,
  OPEN_ORDER_MODAL,
  SET_ERR,
} from "../../constants";

const initialModalState = {
  isOrderModalVisible: false,
  isErrModalVisible: false,
  error: "",
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {})).toEqual(initialModalState);
  });
  it("should handle OPEN_ERR_MODAL", () => {
    expect(
      modalReducer(initialModalState, {
        type: OPEN_ERR_MODAL,
      })
    ).toEqual({
      ...initialModalState,
      isErrModalVisible: true,
    });
  });

  it("should handle CLOSE_ERR_MODAL", () => {
    expect(
      modalReducer(
        {
          isOrderModalVisible: false,
          error: "",
          isErrModalVisible: true,
        },
        {
          type: CLOSE_ERR_MODAL,
        }
      )
    ).toEqual({
      ...initialModalState,
      isErrModalVisible: false,
    });
  });

  it("should handle OPEN_ORDER_MODAL", () => {
    expect(
      modalReducer(initialModalState, {
        type: OPEN_ORDER_MODAL,
      })
    ).toEqual({
      ...initialModalState,
      isOrderModalVisible: true,
    });
  });

  it("should handle CLOSE_ORDER_MODAL", () => {
    expect(
      modalReducer(
        {
          isOrderModalVisible: true,
          isErrModalVisible: false,
          error: "",
        },
        {
          type: CLOSE_ORDER_MODAL,
        }
      )
    ).toEqual({
      ...initialModalState,
      isOrderModalVisible: false,
    });
  });

  it("should handle SET_ERR", () => {
    expect(
      modalReducer(initialModalState, {
        type: SET_ERR,
        text: {
          err: "err text",
        },
      })
    ).toEqual({
      ...initialModalState,
      error: {
        err: "err text",
      },
    });
  });
});
