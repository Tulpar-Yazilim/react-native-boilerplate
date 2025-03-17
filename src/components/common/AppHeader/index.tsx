import React, {memo, useCallback, useLayoutEffect} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIcon from '../AppIcon';
import {AppHeaderProps} from './type';
import {ArzumSeninleLogo, projectColors, spacing} from '@/assets';
import AppImage from '../AppImage';
import AppView from '../AppView';
import {heightPixel} from '@/helpers';
import {RootStackNavigationPropsType, routes} from '@/navigations';

const BackButton = ({canGoBack}: AppHeaderProps) => {
  const navigation = useNavigation();
  return navigation.canGoBack() && canGoBack !== false ? (
    <AppIcon type="feather" name="chevron-left" color="white" size={26} onPress={() => navigation.goBack()} style={[spacing.pt2, spacing.px1]} />
  ) : (
    <AppView />
  );
};

const MenuButton = () => {
  const navigation = useNavigation<RootStackNavigationPropsType>();

  const handleOpenMenu = useCallback(() => {
    navigation.navigate(routes.MENU);
  }, [navigation]);

  return <AppIcon type="feather" name="menu" iconStyle="solid" color="white" size={26} onPress={handleOpenMenu} style={[spacing.pt2, spacing.pl2, spacing.pr1]} />;
};

const CustomHeader = (props: AppHeaderProps) => (
  <>
    <SafeAreaView style={{backgroundColor: projectColors.primary}} />
    <AppView row justify="space-between" style={{backgroundColor: projectColors.primary, height: heightPixel(55)}}>
      <AppView row>
        <MenuButton />
        <BackButton {...props} />
      </AppView>
      <AppImage url={ArzumSeninleLogo} size={110} resizeMode="contain" />
    </AppView>
  </>
);
const AppHeader = (props: AppHeaderProps) => {
  const {navigationOptions} = props;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader {...props} />,
      ...navigationOptions,
    });
  }, [navigation, navigationOptions]);

  return <StatusBar backgroundColor={projectColors.primary} barStyle="light-content" />;
};

export default memo(AppHeader);
