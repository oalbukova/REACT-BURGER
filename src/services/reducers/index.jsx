import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { selectedItemsReducer } from "./selected-items";
import { currentItemReducer } from "./current-item";
import { orderReducer } from "./order";
import { modalReducer } from "./modal";
import { buttonReducer } from "./button";
import { tabReducer } from "./tab";
// import { registerReducer } from "./register";
import { forgotPasswordReducer, resetPasswordReducer } from "./password";
// import { resetPasswordReducer } from "./password";
// import { loginReducer } from './login';
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  ingredientsReducer,
  selectedItemsReducer,
  currentItemReducer,
  orderReducer,
  modalReducer,
  buttonReducer,
  tabReducer,
  // registerReducer,
  // loginReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  userReducer,
});
