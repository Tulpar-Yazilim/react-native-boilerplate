import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './infrastructure';

const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: state => {
      state.user = undefined;
      state.token = undefined;
    },
  },
});

const {actions, reducer} = authSlice;
export const {login, logout} = actions;

export default reducer;
