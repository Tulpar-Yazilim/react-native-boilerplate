import {rootNavigationRef, routes} from '@/navigations';

import {CommonActions} from '@react-navigation/native';

import axios, {AxiosError} from 'axios';

import {API_URL} from 'react-native-dotenv';

import * as authRedux from '../store/auth/slice';
import {store} from '../store';

export const axiosAgent = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

let cancelRequest = false;
axiosAgent.interceptors.request.use(
  async config => {
    if (cancelRequest) return Promise.reject(new Error('Request Cancelled'));

    const token = store.getState()?.auth?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosAgent.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const response = error.response;
    const responseFunctions = {
      400: () => {
        return Promise.reject(error);
      },
      401: async () => {
        store.dispatch(authRedux.logout());

        if (rootNavigationRef?.getCurrentRoute()?.name !== routes.LOGIN_SCREEN) {
          rootNavigationRef.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: routes.LOGIN_SCREEN,
                },
              ],
            }),
          );
        }

        return Promise.reject(error);
      },
    };

    if (error.message === 'Network Error') console.info('Network Error');
    else responseFunctions[response?.status as keyof typeof responseFunctions]();

    return Promise.resolve(response);
  },
);
