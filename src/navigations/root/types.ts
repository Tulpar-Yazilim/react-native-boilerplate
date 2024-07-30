import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import routes from '@/navigations/routes';
import {Keyof} from '@/utils';

export type RootStackNavigationProps = {
  [routes.HOME_ROOT]: undefined;
  [routes.MAIN_TABS]: undefined;
};

export type RootStackNavigationPropsType = NativeStackNavigationProp<RootStackNavigationProps>;

export type RootStackNavigationRouteType<TPageName extends Keyof<RootStackNavigationProps>> = RouteProp<RootStackNavigationProps, TPageName>;
