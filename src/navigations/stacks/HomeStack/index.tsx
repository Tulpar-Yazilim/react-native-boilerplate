import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '@/navigations/routes';
import {HomeScreen} from '@/screens';
import {HomeStackNavigationProps} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigationProps>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
