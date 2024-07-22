import {Linking} from 'react-native';

import {LinkingOptions, PathConfigMap} from '@react-navigation/native';

import routes from '@/navigations/routes';
import {RootStackNavigationProps} from '@/navigations/stacks';
import {navigateToScreenFromDeeplink} from '@/utils';

interface LinkingConfig {
  initialRouteName?: keyof RootStackNavigationProps;
  screens: PathConfigMap<RootStackNavigationProps>;
}

const config: LinkingConfig = {
  screens: {
    [routes.HOME_SCREEN]: {
      path: routes.HOME_SCREEN,
    },
  },
};

const linking: LinkingOptions<RootStackNavigationProps> = {
  prefixes: ['boilerplate://', 'https://boilerplate.com'],
  config,
  subscribe(listener) {
    // When app is opened
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      navigateToScreenFromDeeplink(url);
      listener(url);
    });

    return () => {
      linkingSubscription.remove();
    };
  },
  async getInitialURL() {
    // When app is closed
    const url = await Linking.getInitialURL();
    navigateToScreenFromDeeplink(url);
    return url;
  },
};

export default linking;
