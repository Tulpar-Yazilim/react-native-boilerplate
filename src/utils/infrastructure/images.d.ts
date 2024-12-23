import React from 'react';
declare module '*.png' {
  const value: never;
  export default value;
}

declare module '*.jpg' {
  const value: never;
  export default value;
}

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
