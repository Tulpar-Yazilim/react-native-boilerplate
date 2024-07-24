import routes from '@/navigations/routes';
import {rootNavigationRef} from '@/navigations/stacks';
import {HomeScreen} from '@/screens';
import {DeeplinkConfigType} from '../infrastructure/types';

const homePageDeepLinkRoutes: DeeplinkConfigType[] = [
  {
    route: routes.HOME_SCREEN,
    component: HomeScreen,
  },
];

const navigateToHomeScreensFromDeeplink = (url: string, config: DeeplinkConfigType) => {
  switch (config.route) {
    case routes.HOME_SCREEN:
      setTimeout(() => {
        rootNavigationRef.navigate(routes.HOME_ROOT, {
          screen: routes.HOME_ROOT,
          params: {
            screen: routes.HOME_SCREEN,
          },
        } as never);
      }, 500);
      break;

    default:
      break;
  }
};

export {homePageDeepLinkRoutes, navigateToHomeScreensFromDeeplink};
