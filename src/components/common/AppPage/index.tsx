import React, {memo, useState} from 'react';
import {Keyboard, RefreshControl, ScrollView, StyleProp, View, ViewStyle} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';

import AppHeader from '../AppHeader';
import AppText from '../AppText';
import AppView from '../AppView';
import {AppPageProps} from './type';
import {useThemeColors} from '@/hooks';
import {generalStyles} from '@/assets';
import {heightPixel} from '@/helpers';

function AppPage(props: Readonly<AppPageProps>) {
  const {children, title, scroll = true, safeArea, canGoBack, keyboardScroll, style, navigationOptions, loading, backgroundImage, backgroundResizeMode, onRefreshData, headerShow = true} = props;

  const colors = useThemeColors();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await onRefreshData?.();
    setRefreshing(false);
  };

  const screenCommonStyles = {
    padding: heightPixel(16),
    backgroundColor: !backgroundImage && colors.backgroundColor,
    ...generalStyles.flex,
    ...generalStyles.flexGrow,
    ...style,
  } as StyleProp<ViewStyle>;

  return (
    <>
      {headerShow && <AppHeader title={title} canGoBack={canGoBack} navigationOptions={navigationOptions} />}
      {loading ? (
        <AppText>loading</AppText>
      ) : (
        <AppView flex backgroundImage={backgroundImage} resizeMode={backgroundResizeMode}>
          <>
            {scroll && safeArea && (
              <ScrollView
                style={screenCommonStyles}
                refreshControl={onRefreshData ? <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh?.()} /> : undefined}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <AppView onPress={() => Keyboard.dismiss()} style={screenCommonStyles}>
                  <SafeAreaView>{children}</SafeAreaView>
                </AppView>
              </ScrollView>
            )}

            {scroll && !safeArea && (
              <ScrollView style={screenCommonStyles} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <AppView flex onPress={() => Keyboard.dismiss()}>
                  {children}
                </AppView>
              </ScrollView>
            )}

            {!scroll && safeArea && !keyboardScroll && (
              <SafeAreaView style={screenCommonStyles}>
                <AppView flex onPress={() => Keyboard.dismiss()}>
                  {children}
                </AppView>
              </SafeAreaView>
            )}

            {keyboardScroll && !safeArea && (
              <KeyboardAwareScrollView style={screenCommonStyles} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} scrollEnabled={scroll}>
                <AppView flex onPress={() => Keyboard.dismiss()}>
                  {children}
                </AppView>
              </KeyboardAwareScrollView>
            )}

            {keyboardScroll && safeArea && (
              <KeyboardAwareScrollView
                style={screenCommonStyles}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={generalStyles.flex}
                scrollEnabled={scroll}>
                <SafeAreaView>{children}</SafeAreaView>
              </KeyboardAwareScrollView>
            )}

            {!scroll && !safeArea && !keyboardScroll && (
              <AppView flex style={screenCommonStyles}>
                {children}
              </AppView>
            )}
          </>
        </AppView>
      )}
    </>
  );
}

export default memo(AppPage);
