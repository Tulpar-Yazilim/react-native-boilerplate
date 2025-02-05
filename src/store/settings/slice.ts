import {createSlice} from '@reduxjs/toolkit';

import {i18next} from '@/i18n';
import {initialState} from './infrastructure';

const settingsSlice = createSlice({
  initialState,
  name: 'settingsSlice',
  reducers: {
    changeBottomTabDisplay: (state, action: {payload: boolean}) => {
      state.bottomTabDisplay = action.payload;
    },
    changeLanguage: (state, action: {payload: string}) => {
      i18next.changeLanguage(action.payload);
      state.language = action.payload;
    },
    changeLoadingState: (state, action: {payload: boolean}) => {
      state.appLoader = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const {actions, reducer} = settingsSlice;
export const {changeBottomTabDisplay, changeLanguage, changeLoadingState, setTheme} = actions;

export default reducer;
