import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type AppHeaderProps = {
  title?: string;
  navigationOptions?: NativeStackNavigationOptions;
  canGoBack?: boolean;
};
