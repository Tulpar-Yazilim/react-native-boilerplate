import React, {memo, useLayoutEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIcon from '../AppIcon';
import {AppHeaderProps} from './type';
import {i18n} from '@/i18n/i18';
import {useThemeColors} from '@/hooks';
import {fonts} from '@/assets';

const BackButton = ({canGoBack}: AppHeaderProps) => {
  const navigation = useNavigation();
  return navigation.canGoBack() && canGoBack !== false ? <AppIcon type="feather" name="chevron-left" size={26} onPress={() => navigation.goBack()} /> : null;
};
const AppHeader = (props: AppHeaderProps) => {
  const {title, navigationOptions} = props;

  const colors = useThemeColors();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.headerBackgroundColor,
      },
      ...(title && {...{headerTitle: i18n.t(title)}}),
      headerTitleStyle: {
        ...fonts.headerTitle,
        color: colors.headerColor,
      },
      headerTitleAlign: 'center',
      headerLeft: () => <BackButton {...props} />,
      ...navigationOptions,
    });
  }, [title, navigation, colors, navigationOptions]);

  return <StatusBar backgroundColor={colors.primary} barStyle="light-content" />;
};

export default memo(AppHeader);
