import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Keyof} from '@/utils';

import routes from '../routes';

export type BottomTabStackNavigationProps = {
  [routes.HOME_ROOT]: {
    name: string;
  };
};

export type BottomTabStackNavigationPropsType = NativeStackNavigationProp<BottomTabStackNavigationProps>;

export type BottomTabStackNavigationRouteType<TPageName extends Keyof<BottomTabStackNavigationProps>> = RouteProp<BottomTabStackNavigationProps, TPageName>;
