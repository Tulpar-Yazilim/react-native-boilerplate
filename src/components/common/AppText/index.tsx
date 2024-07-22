import {t} from 'i18next';
import React from 'react';
import {Text} from 'react-native';

interface Props {
  children: string;
  langQuery?: Object;
}

export function AppText({children, langQuery = {}, ...props}: Props) {
  return (
    <>
      {typeof children === 'string' ? (
        <Text {...props}>{t(children, {...langQuery})}</Text>
      ) : (
        <Text {...props}>{children}</Text>
      )}
    </>
  );
}
