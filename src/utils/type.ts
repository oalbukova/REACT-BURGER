import {History, Location} from "history";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action, ActionCreator, Dispatch} from 'redux';
import {store} from '../services/store';
import {TButtonActions} from "../services/actions/button";
import {TIngredientsActions} from "../services/actions/ingredients";
import {TModalActions} from "../services/actions/modal";
import {TOrderActions} from "../services/actions/order";
import {TPasswordActions} from "../services/actions/password";
import {TSelectedItemsActions} from "../services/actions/selected-items";
import {TTabActions} from "../services/actions/tab";
import {TUserActions} from "../services/actions/user";

type TApplicationActions =
  TButtonActions
  | TIngredientsActions
  | TModalActions
  | TOrderActions
  | TPasswordActions
  | TSelectedItemsActions
  | TTabActions
  | TUserActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

export type TLocationState = {
  background: Location; from?: { pathname: string };
};

export type TPathname = {
  pathname: string
};

export type THistoryState = {
  history: History;
};

export type TIngredient = {
  _id: string; name: string; type: string; proteins: number; fat: number; carbohydrates: number; calories: number; price: number; image: string; image_mobile: string; image_large: string; __v: number; uuid: string;
};

export type TConstructorIngredient = {
  item: TIngredient; index: number; key: string; id: string; type: "top" | "bottom" | undefined; text: string;
};

export type TOrder = {
  number?: number;
};

export type TDragItem = {
  index: number; id: string; type: string;
};

// export type TForm = {
//   name: string | undefined; email: string | undefined; password: string;
// };

export type TForm = {
  name: string; email: string; password: string;
};


export type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TResetPasswordForm = {
  code: string; password: string;
};

export type TCookieProps = {
  [name: string]: string | Date | number | boolean;
};

export type TData = {
  success?: boolean; accessToken?: string; refreshToken?: string; user?: {
    email?: string, name?: string
  },
};

export type TToken = {
  success?: boolean; accessToken?: string; refreshToken?: string;
};

export type TUserData = {
  success?: boolean; user?: {
    email: string, name: string
  },
};

export type TRequestMessage = {
  success?: boolean; message?: string;
};
