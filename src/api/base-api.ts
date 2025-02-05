import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from 'react-native-dotenv';

import type {RootState} from '../store';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState)?.auth?.token;
      if (token) {
        headers.set('Authorization', 'Bearer ' + token);
      }
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApiReducer',
});

export {baseApi};
