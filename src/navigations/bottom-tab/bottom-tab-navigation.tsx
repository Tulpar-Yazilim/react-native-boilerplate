import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';

import {AppIcon} from '@/components';
import {tabIconColor, tabIconSelectedColor, tabIconSize} from '@/helpers';

import {BottomTabContainer} from './bottom-tab-container';
import {BottomTabStackNavigationProps} from './types';
import routes from '../routes';
import HomeStack from '../stacks/HomeStack';

const Tab = createBottomTabNavigator<BottomTabStackNavigationProps>();

export const BottomTabNavigation = () => {
  return (
    <Host>
      <Tab.Navigator tabBar={props => <BottomTabContainer {...props} />}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) =>
              focused ? <AppIcon type="feather" name="home" size={tabIconSize} color={tabIconSelectedColor} /> : <AppIcon type="feather" name="home" size={tabIconSize} color={tabIconColor} />,
          }}
          name={routes.HOME_ROOT}
          component={HomeStack}
        />
      </Tab.Navigator>
    </Host>
  );
};