import { combineReducers } from "redux";

import {
  ingredientsReducer,
  selectedItemsReducer,
  currentItemReducer,
  orderReducer,
  modalReducer,
  buttonReducer,
  tabReducer,
} from "./cart";

export const rootReducer = combineReducers({
  ingredientsReducer: ingredientsReducer,
  selectedItemsReducer: selectedItemsReducer,
  currentItemReducer: currentItemReducer,
  orderReducer: orderReducer,
  modalReducer: modalReducer,
  buttonReducer: buttonReducer,
  tabReducer: tabReducer,
});
