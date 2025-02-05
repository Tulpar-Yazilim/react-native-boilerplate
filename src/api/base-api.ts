import {AxiosError, AxiosRequestConfig} from 'axios';

import {BaseQueryFn, createApi} from '@reduxjs/toolkit/query/react';
import {axiosAgent} from './axios';

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params, headers}) => {
    try {
      const result = await axiosAgent({
        url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery(),
  keepUnusedDataFor: 30,
  endpoints: () => ({}),
});
