import React, {useEffect} from 'react';
import {Keyboard, StatusBar, useColorScheme} from 'react-native';

import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {linking, locale} from '@/config';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {initLocale} from '@/i18n';
import {persistor, settingsRedux, store} from '@/store';

import {generalStyles} from './assets';
import RootNavigator from './navigations/root';
import {Toasts} from '@backpackapp-io/react-native-toast';

locale();

const MainContainer = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const language = useAppSelector(state => state.settings.language);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => dispatch(settingsRedux.changeBottomTabDisplay(false)));
    Keyboard.addListener('keyboardDidHide', () => dispatch(settingsRedux.changeBottomTabDisplay(true)));
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  useEffect(() => {
    initLocale(language);
  }, [language]);

  return (
    <NavigationContainer linking={linking} theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={generalStyles.flex}>
          <GestureHandlerRootView style={generalStyles.flex}>
            <MainContainer />
            <Toasts />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
