import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '@/store';

export * from './useDebounce';
export * from './useKeyboardAvoiding';
export * from './useThemeColors';
export * from './useThemeMode';
export * from './useTranslate';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
