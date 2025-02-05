export interface IAuthState {
  user?: never;
  token?: string;
}

export const initialState: IAuthState = {
  token: undefined,
  user: undefined,
};
