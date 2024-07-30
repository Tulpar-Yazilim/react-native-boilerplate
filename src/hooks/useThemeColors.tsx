import {useColorScheme} from 'react-native';

import {themeColors} from '@/helpers';
import {useAppSelector} from '@/hooks';

const useThemeColors = () => {
  const phoneTheme = useColorScheme();
  const theme = useAppSelector(state => state.settings.theme);
  const colors = themeColors[theme || phoneTheme];
  return colors;
};

export default useThemeColors;
