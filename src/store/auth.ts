import {createSlice} from '@reduxjs/toolkit';

export interface IAuthState {
  user?: never;
  token?: string;
}

export const initialState: IAuthState = {
  token: '',
  user: undefined,
};

const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: state => {
      state.user = undefined;
      state.token = '';
    },
  },
});

const {actions, reducer} = authSlice;
export const {login, logout} = actions;

export default reducer;
