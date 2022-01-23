import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { selectedItemsReducer } from "./selected-items";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { buttonReducer } from "./button";
import { tabReducer } from "./tab";
import { forgotPasswordReducer, resetPasswordReducer } from "./password";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredientsReducer,
  selectedItemsReducer,
  orderReducer,
  modalReducer,
  buttonReducer,
  tabReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  userReducer,
});
