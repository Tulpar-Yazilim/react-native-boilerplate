import {useColorScheme} from 'react-native';

import {themeColors} from '@/assets';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '@/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useThemeColors = () => {
  const phoneTheme = useColorScheme();
  const theme = useAppSelector(state => state.settings.theme);
  const colors = themeColors[theme || phoneTheme];
  return colors;
};
