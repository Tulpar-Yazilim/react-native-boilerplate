import React from 'react';
import {View} from 'react-native';

import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '../routes';

import {RootStackNavigationProps} from './types';
import {BottomTabNavigation} from '../bottom-tab';
import HomeStack from '../stacks/HomeStack';

/**
 * fade animate trasition navigation
 * @param {*} {current, closing}
 */
export const forFade = ({current}: {current: {progress: number}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const PlaceholderComponent = () => <View />;

const RootStackNavigator = createNativeStackNavigator<RootStackNavigationProps>();
export const rootNavigationRef = createNavigationContainerRef<RootStackNavigationProps>();

const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        name={routes.MAIN_TABS}
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />

      <RootStackNavigator.Screen
        name={routes.HOME_ROOT}
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigator;
