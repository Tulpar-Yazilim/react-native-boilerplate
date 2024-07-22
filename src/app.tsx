import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {initLocale} from './i18n';
import HomeStack from './navigations/stacks/HomeStack';

export function App() {
  const isDarkMode = useColorScheme() === 'dark';

  initLocale('tr');

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeStack />
    </NavigationContainer>
  );
}
