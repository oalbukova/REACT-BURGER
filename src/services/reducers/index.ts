// redux
import { combineReducers } from "redux";

// reducers
import { ingredientsReducer } from "./ingredients/ingredients";
import { selectedItemsReducer } from "./selected-items/selected-items";
import { orderReducer } from "./order/order";
import { modalReducer } from "./modal/modal";
import { buttonReducer } from "./button/button";
import { tabReducer } from "./tab/tab";
import { forgotPasswordReducer, resetPasswordReducer } from "./password/password";
import { userReducer } from "./user/user";
import { wsReducer } from "./wsReducer/wsReducer";


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
  wsReducer
});
