import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { selectedItemsReducer } from "./selected-items";
import { currentItemReducer } from "./current-item";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { buttonReducer } from "./button";
import { tabReducer } from "./tab";

export const rootReducer = combineReducers({
  ingredientsReducer,
  selectedItemsReducer,
  currentItemReducer,
  orderReducer,
  modalReducer,
  buttonReducer,
  tabReducer,
});
