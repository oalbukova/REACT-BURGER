// reducer
import { selectedItemsReducer } from "./selected-items";

//constants
import {
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
  DELETE_SELECTED_BUNS,
  DELETE_SELECTED_TOPPING,
  DELETE_SELECTED_TOPPINGS,
  SORT_TOPPING,
} from "../../constants";

// utils
import { bun1, topping1, topping2 } from "../../../utils/test-utils";

const initialSelectedItemsState = {
  selectedBun: [],
  selectedToppings: [],
};

describe("selected-items reducer", () => {
  it("should return the initial state", () => {
    expect(selectedItemsReducer(undefined, {})).toEqual(
      initialSelectedItemsState
    );
  });
  it("should handle ADD_SELECTED_BUN", () => {
    expect(
      selectedItemsReducer(initialSelectedItemsState, {
        type: ADD_SELECTED_BUN,
        item: bun1,
      })
    ).toEqual({
      ...initialSelectedItemsState,
      selectedBun: [bun1],
    });
  });

  it("should handle ADD_SELECTED_TOPPING", () => {
    expect(
      selectedItemsReducer(initialSelectedItemsState, {
        type: ADD_SELECTED_TOPPING,
        item: topping1,
      })
    ).toEqual({
      ...initialSelectedItemsState,
      selectedToppings: [topping1],
    });
  });
  it("should handle DELETE_SELECTED_BUNS", () => {
    expect(
      selectedItemsReducer(initialSelectedItemsState, {
        type: DELETE_SELECTED_BUNS,
        item: bun1,
      })
    ).toEqual({
      ...initialSelectedItemsState,
      selectedBun: [],
    });
  });

  it("should handle DELETE_SELECTED_TOPPINGS", () => {
    expect(
      selectedItemsReducer(initialSelectedItemsState, {
        type: DELETE_SELECTED_TOPPINGS,
        item: [topping1, topping2],
      })
    ).toEqual({
      ...initialSelectedItemsState,
      selectedToppings: [],
    });
  });

  it("should handle DELETE_SELECTED_TOPPING", () => {
    expect(
      selectedItemsReducer(
        {
          selectedBun: [],
          selectedToppings: [topping1, topping2],
        },
        {
          type: DELETE_SELECTED_TOPPING,
          item: topping1,
        }
      )
    ).toEqual({
      ...initialSelectedItemsState,
      selectedToppings: [topping2],
    });
  });

  it("should handle SORT_TOPPING", () => {
    expect(
      selectedItemsReducer(
        {
          selectedBun: [],
          selectedToppings: [topping1, topping2],
        },
        {
          type: SORT_TOPPING,
          dragIndex: 0,
          hoverIndex: 1,
        }
      )
    ).toEqual({
      ...initialSelectedItemsState,
      selectedToppings: [topping2, topping1],
    });
  });
});
