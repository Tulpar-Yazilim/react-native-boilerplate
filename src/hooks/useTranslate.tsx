import {useMemo} from 'react';

import {useTranslation} from 'react-i18next';

export const useTranslate = (text = '', params = {}) => {
  const {t, i18n} = useTranslation();
  return useMemo(() => {
    try {
      return i18n.exists(text) ? t(text, params) : false;
    } catch (error) {
      return false;
    }
  }, [t, i18n, text, params]);
};
