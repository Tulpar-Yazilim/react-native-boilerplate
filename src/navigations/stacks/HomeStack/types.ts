import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Keyof} from '@/utils';

import routes from '../../routes';

export type HomeScreen = {
  name: string;
};

export type HomeStackNavigationProps = {
  [routes.HOME_SCREEN]: {
    name: string;
  };
};

export type HomeStackNavigationPropsType = NativeStackNavigationProp<HomeStackNavigationProps>;

export type HomeStackNavigationRouteType<TPageName extends Keyof<HomeStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
