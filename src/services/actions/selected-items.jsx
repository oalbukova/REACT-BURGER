import {
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
  DELETE_SELECTED_BUNS,
  DELETE_SELECTED_TOPPINGS,
  DELETE_SELECTED_TOPPING,
  SORT_TOPPING,
} from "./actionTypes";

export const addSelectedBun = (item) => ({
  type: ADD_SELECTED_BUN,
  item,
});

export const addSelectedTopping = (item) => ({
  type: ADD_SELECTED_TOPPING,
  item,
});

export const deleteSelectedBuns = () => ({
  type: DELETE_SELECTED_BUNS,
});

export const deleteSelectedToppings = () => ({
  type: DELETE_SELECTED_TOPPINGS,
});

export const deleteSelectedTopping = (item) => ({
  type: DELETE_SELECTED_TOPPING,
  item,
});

export const sortTopping = (dragIndex, hoverIndex) => ({
  type: SORT_TOPPING,
  dragIndex,
  hoverIndex,
});
