import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import MMKVStorage from '../utils/storage';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import {baseApi, rtkQueryErrorHandler, rtkQueryLoaderHandler} from '@/api';

import * as authRedux from './auth';
import * as settingsRedux from './settings';

export {authRedux, settingsRedux};

const rootPersistConfig = {
  key: 'root',
  version: 1,
  blacklist: [baseApi.reducerPath],
  storage: MMKVStorage,
};

const settingsPersistConfig = {
  key: 'settings',
  version: 1,
  blacklist: ['appLoader'],
  storage: MMKVStorage,
};

export const rootReducer = combineReducers({
  auth: authRedux.default,
  settings: persistReducer(settingsPersistConfig, settingsRedux.default),
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(baseApi.middleware, rtkQueryErrorHandler, rtkQueryLoaderHandler),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
