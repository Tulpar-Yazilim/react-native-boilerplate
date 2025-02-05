import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '@/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useThemeMode = () => {
  return useAppSelector(state => state.settings.theme);
};
