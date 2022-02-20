import {
  ADD_SELECTED_BUN,
  ADD_SELECTED_TOPPING,
  DELETE_SELECTED_BUNS,
  DELETE_SELECTED_TOPPING,
  DELETE_SELECTED_TOPPINGS,
  SORT_TOPPING,
} from "../constants";

import {TIngredient} from "../../utils/type";


export interface IAddSelectedBunAction {
  readonly type: typeof ADD_SELECTED_BUN;
  readonly item: TIngredient;
}

export interface IAddSelectedToppingAction {
  readonly type: typeof ADD_SELECTED_TOPPING;
  readonly item: TIngredient;
}

export interface IDeleteSelectedBunsAction {
  readonly type: typeof DELETE_SELECTED_BUNS;
}

export interface IDeleteSelectedToppingsAction {
  readonly type: typeof DELETE_SELECTED_TOPPINGS;
}

export interface IDeleteSelectedToppingAction {
  readonly type: typeof DELETE_SELECTED_TOPPING;
  readonly item: TIngredient;
}

export interface ISortToppingAction {
  readonly type: typeof SORT_TOPPING;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export type TSelectedItemsActions =
  IAddSelectedBunAction |
  IAddSelectedToppingAction |
  IDeleteSelectedBunsAction |
  IDeleteSelectedToppingsAction |
  IDeleteSelectedToppingAction |
  ISortToppingAction;


export const addSelectedBun = (item: TIngredient): IAddSelectedBunAction => ({
  type: ADD_SELECTED_BUN,
  item,
});

export const addSelectedTopping = (item: TIngredient): IAddSelectedToppingAction => ({
  type: ADD_SELECTED_TOPPING,
  item,
});

export const deleteSelectedBuns = (): IDeleteSelectedBunsAction => ({
  type: DELETE_SELECTED_BUNS,
});

export const deleteSelectedToppings = (): IDeleteSelectedToppingsAction => ({
  type: DELETE_SELECTED_TOPPINGS,
});

export const deleteSelectedTopping = (item: TIngredient): IDeleteSelectedToppingAction => ({
  type: DELETE_SELECTED_TOPPING,
  item,
});

export const sortTopping = (dragIndex: number, hoverIndex: number): ISortToppingAction => ({
  type: SORT_TOPPING,
  dragIndex,
  hoverIndex,
});
