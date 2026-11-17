import {http} from './http-config'; 
import type { AxiosRequestConfig } from 'axios';

export const useBaseApi = () => {
  const get = <T>(url: string, config?: AxiosRequestConfig) =>
    http.get<T>(url, config).then(({ data }) => data);

  const post = <T, D = unknown>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ) => http.post<T>(url, body, config).then(({ data }) => data);

  const put = <T, D = unknown>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ) => http.put<T>(url, body, config).then(({ data }) => data);

  const remove = <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => http.delete<T>(url, config).then(({ data }) => data);

  return {
    get,
    post,
    put,
    delete: remove
  };
};