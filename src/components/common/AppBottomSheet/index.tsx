import React, {forwardRef, memo, Ref, useEffect, useImperativeHandle, useMemo, useRef} from 'react';
import {Pressable, StatusBar} from 'react-native';

import BottomSheet, {BottomSheetBackdropProps, BottomSheetScrollView, BottomSheetView, useBottomSheetTimingConfigs} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Portal} from 'react-native-portalize';
import Animated, {Easing, Extrapolation, interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {AppBottomSheetProps} from './type';
import {useThemeColors, useThemeMode} from '@/hooks';
import {generalStyles, projectColors} from '@/assets';
import {styles} from './styles';
import AppView from '../AppView';

const AppBottomSheet = (props: AppBottomSheetProps, ref: Ref<BottomSheetMethods>) => {
  const {children, enablePanDownToClose = true, backdrop = true, portal = true, isVisible = false, customStyles, onClose} = props;

  const themeMode = useThemeMode();
  const colors = useThemeColors();
  const bottomSheetRef = useRef<BottomSheet | null>(null);

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 350,
    easing: Easing.inOut(Easing.ease),
  });

  useImperativeHandle(ref, () => ({
    snapToIndex: (value: number) => bottomSheetRef?.current?.snapToIndex?.(value),
    snapToPosition: (position: string | number) => bottomSheetRef?.current?.snapToPosition?.(position, animationConfigs),
    expand: () => bottomSheetRef?.current?.expand?.(),
    collapse: () => bottomSheetRef?.current?.collapse?.(),
    close: () => bottomSheetRef?.current?.close?.(),
    forceClose: () => bottomSheetRef?.current?.forceClose?.(),
  }));

  const CustomBackdrop = ({style}: BottomSheetBackdropProps) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(isVisible ? 1 : 0, [0, 1], [0, 1], Extrapolation.CLAMP),
    }));

    // styles
    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: projectColors.black50,
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle],
    );

    return (
      <Animated.View style={containerStyle}>
        <Pressable
          style={generalStyles.flex}
          onPress={() => {
            bottomSheetRef.current?.close();
          }}
        />
      </Animated.View>
    );
  };
  const BackdropComponent = isVisible && backdrop ? CustomBackdrop : null;

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const Provider = portal ? Portal : React.Fragment;

  return (
    <Provider>
      <BottomSheet
        {...props}
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose={enablePanDownToClose}
        enableDynamicSizing
        topInset={StatusBar.currentHeight ?? 0}
        onClose={onClose}
        backdropComponent={BackdropComponent}
        handleIndicatorStyle={{
          backgroundColor: themeMode === 'dark' ? colors?.grey : colors?.black,
        }}
        animationConfigs={animationConfigs}>
        <BottomSheetScrollView style={[generalStyles.flex, generalStyles.flexGrow, customStyles]}>
          <AppView style={[styles.bottomSheetView]}>{children}</AppView>
        </BottomSheetScrollView>
      </BottomSheet>
    </Provider>
  );
};

export default memo(forwardRef(AppBottomSheet));
