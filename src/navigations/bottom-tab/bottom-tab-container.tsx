import React from 'react';
import {Pressable, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {generalStyles} from '@/assets';
import {AppText} from '@/components';
import {flexBox} from '@/helpers';
import {useAppSelector} from '@/hooks';

export const BottomTabContainer = (props: BottomTabBarProps) => {
  const bottomTabDisplay = useAppSelector(state => state.settings.bottomTabDisplay);

  const {state, descriptors, navigation} = props;

  return (
    <React.Fragment>
      {bottomTabDisplay && (
        <View style={generalStyles.tab}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            // eslint-disable-next-line no-nested-ternary
            const label = (options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name) as string;
            const TabBarIcon = options.tabBarIcon;

            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            return (
              <Pressable key={route.name} onPress={onPress} style={[generalStyles.flex, flexBox('column', 'center', 'center')]}>
                {TabBarIcon?.({
                  focused: isFocused,
                  color: '',
                  size: 0,
                })}
                <AppText>{label}</AppText>
              </Pressable>
            );
          })}
        </View>
      )}
    </React.Fragment>
  );
};
