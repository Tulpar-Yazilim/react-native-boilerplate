import React from 'react';
import {Text} from 'react-native';

import {useTranslation} from 'react-i18next';

interface Props {
  children: string;
  langQuery?: object;
}

export function AppText({children, langQuery = {}, ...props}: Readonly<Props>) {
  const {t} = useTranslation();

  return <>{typeof children === 'string' ? <Text {...props}>{t(children, {...langQuery})}</Text> : <Text {...props}>{children}</Text>}</>;
}
