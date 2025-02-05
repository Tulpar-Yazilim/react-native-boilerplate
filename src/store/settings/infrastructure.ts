export interface ISettingsState {
  language: string;
  theme: 'light' | 'dark';
  appLoader: boolean;
  bottomTabDisplay: boolean;
}

export const initialState: ISettingsState = {
  appLoader: false,
  bottomTabDisplay: true,
  language: 'tr',
  theme: 'light',
};
