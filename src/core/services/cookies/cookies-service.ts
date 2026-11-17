import Cookies from 'js-cookie';

export const setCookie = (key: string, value: unknown) => {
  Cookies.set(key, String(value), {
    expires: 1,
    path: '/',
    sameSite: 'Lax',
    secure: true
  });
}

export const getCookie = (key: string) => {
  return Cookies.get(key);
}

export const removeCookie = (key: string) => {
  return Cookies.remove(key);
}

export const clearCookies = (keys: string[]) => {
  keys.forEach(key => {
    removeCookie(key);
  });
}
