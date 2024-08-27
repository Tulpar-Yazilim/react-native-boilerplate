import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '@/navigations/routes';
import {HomeScreen} from '@/pages';

import {HomeStackNavigationProps} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigationProps>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Home Screen',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
