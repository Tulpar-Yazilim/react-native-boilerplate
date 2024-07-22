import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import HomeStack from './navigations/stacks/HomeStack';

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeStack />
    </NavigationContainer>
  );
}
