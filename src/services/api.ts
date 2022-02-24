import {API_URL} from "../utils/constants";
import {getCookie} from "../utils/utils";


export const getIngredientsRequest = async (): Promise<Response>  =>
  await fetch(`${API_URL}ingredients`)

export const getOrderRequest = async (selectedId: ReadonlyArray<string>)  =>
  await fetch(`${API_URL}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: selectedId,
    }),
  })

export const forgotPasswordRequest = async (email: string): Promise<Response> =>
  await fetch(`${API_URL}password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  })

export const resetPasswordRequest = async (password: string, token: string): Promise<Response> =>
  await fetch(`${API_URL}password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, token}),
  })

export const registerRequest = async (email: string, password: string, name: string): Promise<Response> =>
  await fetch(`${API_URL}auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password, name}),
  })

export const updateTokenRequest = async (): Promise<Response> =>
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

export const getUserRequest = async (): Promise<Response> =>
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

export const authorizeRequest = async (email: string, password: string): Promise<Response> =>
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

export const updateUserRequest = async (email: string, password: string, name: string): Promise<Response> =>
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

export const deleteUserRequest = async (token: string | null): Promise<Response> =>
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



