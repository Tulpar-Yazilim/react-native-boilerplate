import {Dimensions, ScaledSize} from 'react-native';

const activeWindow: ScaledSize = Dimensions.get('window');
const screenWidth: number = activeWindow.width;
const screenHeight: number = activeWindow.height;

const widthPixel = (size: number): number => {
  return size;
};

const heightPixel = (size: number): number => {
  return size;
};

const fontPixel = (size: number): number => {
  return size;
};

export {fontPixel, heightPixel, screenHeight, screenWidth, widthPixel};
