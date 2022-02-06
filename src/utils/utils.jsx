import { MILLISECONDS } from "./constants";

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, cookieProps) {
  const props = { ...cookieProps };
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const date = new Date();
    date.setTime(date.getTime() + exp * MILLISECONDS);
    exp = date;
  }
  if (exp && exp.toUTCString) {
    exp = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = `${updatedCookie}; max-age=30`;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}
