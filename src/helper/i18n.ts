import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import English from '../constants/language/en.json';
import Malayalam from '../constants/language/mal.json';
i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: English,
    ml: Malayalam,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
