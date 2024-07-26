import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './languages/en';
import tr from './languages/tr';

const initLocale = async (langauge: string = 'tr') => {
  const resources = {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  };

  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'tr',
      initImmediate: false,
      interpolation: {
        escapeValue: false,
      },
      react: {useSuspense: false},
      resources,
    })
    .then(async () => {
      await i18n.changeLanguage(langauge);
    });
};

export {i18n, initLocale};
