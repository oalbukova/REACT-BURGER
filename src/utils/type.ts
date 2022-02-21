import { Location, History } from "history";

export type TLocationState = {
  background: Location;
  from?: { pathname: string };
};

export type TPathname = {
  pathname: string
};

export type THistoryState = {
  history: History;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uuid: string;
};

export type TConstructorIngredient = {
  item: TIngredient;
  index: number;
  key: string;
  id: string;
  type: "top" | "bottom" | undefined;
  text: string;
};

export type TOrder = {
  number: number;
};

export type TDragItem = {
  index: number;
  id: string;
  type: string;
};

export type TForm = {
  name: string;
  email: string;
  password: string;
};

export type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

export type TResetPasswordForm = {
  code: string;
  password: string;
};

export type TCookieProps = {
  [name: string]: string | Date | number | boolean;
};

export type TData = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user?: {
    email: string,
    name: string
  },
};

export type TToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type TUserData = {
  success: boolean;
  user?: {
    email: string,
    name: string
  },
};

export type TDeleteUserData = {
  success: boolean;
  message: string;
};
