import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './en.json';
import hi from './hi.json';

// Only the device locale check happens here — the user's *saved* choice
// (if any) is replayed on top of this by useLocaleStore once AsyncStorage
// rehydrates, the same two-step pattern as the theme store.
const deviceLanguage = Localization.getLocales()[0]?.languageCode === 'hi' ? 'hi' : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
