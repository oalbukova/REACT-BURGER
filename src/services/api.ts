import {API_URL} from "../utils/constants";
import {authorize, deleteUser, getUser, updateUser} from "./actions/user";
import {getCookie} from "../utils/utils";

type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
  [key in TDataKey]: TDataType
} & {
  success: boolean; message?: string; headers?: Headers;
};

interface CustomBody<T extends any> extends Body {
  json(): Promise<T>;
}

interface CustomResponse<T> extends CustomBody<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;

  clone(): Response;
}

export const getOrderRequest = async (selectedId: ReadonlyArray<string>) =>
  await fetch(`${API_URL}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: selectedId,
    }),
  })

export const forgotPasswordRequest = async (email: string) =>
  await fetch(`${API_URL}password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  })

export const resetPasswordRequest = async (password: string, token: string) =>
  await fetch(`${API_URL}password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, token}),
  })

export const registerRequest = async (email: string, password: string, name: string) =>
  await fetch(`${API_URL}auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password, name}),
  })

export const updateTokenRequest = async () =>
  await fetch(`${API_URL}auth/token`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      token: `${localStorage.getItem("refreshToken")}`,
    }),
  })

export const getUserRequest = async () =>
  await fetch(`${API_URL}auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })

export const authorizeRequest = async (email: string, password: string) =>
  await fetch(`${API_URL}auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({email, password}),
  })

export const updateUserRequest = async (email: string, password: string, name: string) =>
  await fetch(`${API_URL}auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({email, password, name}),
  })

export const deleteUserRequest = async (token: string | null) =>
  await  fetch(`${API_URL}auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({token}),
  })



