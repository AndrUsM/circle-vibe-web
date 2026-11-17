import axios, { AxiosError, HttpStatusCode } from 'axios';

import { clearCookies } from '../cookies';
import { StorageKeys } from '../../constants';

const API_BASE_URL = import.meta.env.API_BASE_URL;
const CONTENT_TYPE = 'application/json';
const COMMON_ERROR_MESSAGE = 'Something went wrong';
const NO_CONNENTION_MESSAGE = 'API Connection issue';
const FORBIDDEN_MESSAGE = 'No Access';
const APP_STORANGE_KEYS = Object.values(StorageKeys);

type AxiosInterceptorRejected = AxiosError;

export const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': CONTENT_TYPE,
    Accept: CONTENT_TYPE,
  },
});

http.interceptors.request.use((config) => {
  const token = '';

  if (!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers['X-Client-Type'] = 'web';

  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error: AxiosInterceptorRejected) => {
    const { status } = error?.response ?? {};
    const message = getErrorMessage(status);

    if (status === HttpStatusCode.Unauthorized) {
      clearCookies(APP_STORANGE_KEYS);
    }

    return Promise.reject(message);
  },
);

const getErrorMessage = (status?: number): string => {
  if (!status) {
    return NO_CONNENTION_MESSAGE;
  }

  if (status === HttpStatusCode.InternalServerError) {
    return COMMON_ERROR_MESSAGE;
  }

  if (status === HttpStatusCode.Forbidden) {
    return FORBIDDEN_MESSAGE;
  }

  return COMMON_ERROR_MESSAGE;
};
