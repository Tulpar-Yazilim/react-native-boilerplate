import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import {baseApi, rtkQueryLoaderHandler} from '@/api';

import * as authRedux from './auth/slice';
import * as settingsRedux from './settings/slice';
import MMKVStorage from '../utils/storage';

export {authRedux, settingsRedux};

const rootPersistConfig = {
  key: 'root',
  blacklist: [baseApi.reducerPath, 'settings'],
  storage: MMKVStorage,
};
 
const settingsPersistConfig = {
  blacklist: ['appLoader'],
  key: 'settings',
  storage: MMKVStorage,
  version: 1,
};

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authRedux.default,
  settings: persistReducer(settingsPersistConfig, settingsRedux.default),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(baseApi.middleware, rtkQueryLoaderHandler),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
