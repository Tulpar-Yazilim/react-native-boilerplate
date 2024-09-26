import React, {memo, useCallback} from 'react';

import {useTranslation} from 'react-i18next';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {useAppSelector, useThemeColors, useThemeMode} from '@/hooks';

import type {AppDatePickerProps} from './type';

const AppDatePicker = (props: Readonly<AppDatePickerProps>) => {
  const {visible, mode = 'date', minimumDate, maximumDate, date, onConfirm, onCancel} = props;
  const {t} = useTranslation();

  const language = useAppSelector(state => state.settings.language);
  const themeMode = useThemeMode();
  const colors = useThemeColors();

  const handleConfirm = useCallback((_date: Date) => {
    onConfirm?.(_date);
  }, []);

  return (
    <DateTimePickerModal
      confirmTextIOS={t('confirm')}
      cancelTextIOS={t('close')}
      date={date}
      locale={language}
      isVisible={visible}
      mode={mode}
      onConfirm={handleConfirm}
      onCancel={() => onCancel?.()}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      buttonTextColorIOS={colors.textBlack as string}
      isDarkModeEnabled={themeMode === 'dark'}
      textColor={themeMode === 'dark' ? 'white' : 'auto'}
      themeVariant={themeMode === 'dark' ? 'dark' : 'light'}
      display={mode === 'time' ? 'spinner' : 'inline'}
    />
  );
};

export default memo(AppDatePicker);
