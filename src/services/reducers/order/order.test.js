// reducer
import { orderReducer } from "./order";

// constants
import {
  DELETE_CURRENT_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../../constants";

// utils
import { order1 } from "../../../utils/test-utils";

const initialOrderState = {
  order: {},
  orderRequest: false,
  orderFailed: false,
};

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialOrderState);
  });
  it("should handle GET_ORDER_REQUEST", () => {
    expect(
      orderReducer(initialOrderState, {
        type: GET_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialOrderState,
      orderRequest: true,
    });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(
      orderReducer(initialOrderState, {
        type: GET_ORDER_SUCCESS,
        order: { order1 },
      })
    ).toEqual({
      ...initialOrderState,
      order: { order1 },
    });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(
      orderReducer(initialOrderState, {
        type: GET_ORDER_FAILED,
      })
    ).toEqual({
      ...initialOrderState,
      orderFailed: true,
    });
  });

  it("should handle DELETE_CURRENT_ORDER", () => {
    expect(
      orderReducer(
        {
          order: { order1 },
          orderRequest: false,
          orderFailed: false,
        },
        {
          type: DELETE_CURRENT_ORDER,
        }
      )
    ).toEqual({
      ...initialOrderState,
      order: {},
    });
  });
});
