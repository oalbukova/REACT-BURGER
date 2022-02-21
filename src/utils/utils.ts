import { MILLISECONDS } from "./constants";

import {TCookieProps, TData} from "./type";

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string | null,
  cookieProps: TCookieProps
): void {
  const props = { ...cookieProps };
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const date = new Date();
    date.setTime(date.getTime() + exp * MILLISECONDS);
    exp = props.expires = date;
  }
  if (exp && exp instanceof Date) {
    props.expires = exp.toUTCString();
  }
  if (value) {
    value = encodeURIComponent(value);
  }

  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string): void {
  setCookie(name, null, { expires: -1 });
}

export function setTokens(data: TData): void {
  const accessToken: string = data.accessToken.split("Bearer ")[1];
  const authToken: string = data.refreshToken;
  accessToken && setCookie("token", accessToken, { "max-age": 30 });
  authToken && localStorage.setItem("refreshToken", authToken);
}
