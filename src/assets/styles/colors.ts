import {ColorValue} from 'react-native';

export const projectColors = Object.freeze({
  headerBackgroundColor: '#FFFFFFFF' as ColorValue,
  headerColor: '#000000FF' as ColorValue,

  black: '#000000FF' as ColorValue,
  black40: '#00000040' as ColorValue,
  black50: '#00000050' as ColorValue,
  black100: '#1B0407FF' as ColorValue,
  blackFilter: '#282626' as ColorValue,
  blackShadow: '#00000035' as ColorValue,
  error: '#f5222d',
  info: '#1890ff',
  pink: '#FF576D' as ColorValue,
  primary: '#1890ff',
  purple100: '#A52DB4FF' as ColorValue,
  purpleLight: '#F4F3FFFF' as ColorValue,
  purpleLigth2: '#EEECFBFF' as ColorValue,
  red: '#D63031FF' as ColorValue,
  red50: '#F4505FFF' as ColorValue,
  red100: '#CE233AFF' as ColorValue,
  red125: '#A1051DFF' as ColorValue,
  success: ' #52c41a',
  textBlack: '#212123FF' as ColorValue,
  transparent: '#FFFFFF00' as ColorValue,
  transparentBlack: '#000000A0' as ColorValue,
  warning: '#faad14',
  white: '#FFFFFFFF' as ColorValue,
  yellow: '#E9BD66' as ColorValue,
  grey: '#F3F3F3FF' as ColorValue,
  blue: '#4032CFFF' as ColorValue,
});

export const themeColors = Object.freeze({
  light: projectColors,
  dark: projectColors,
});
