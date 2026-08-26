import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ur from './locales/ur.json';
import az from './locales/az.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ur: { translation: ur },
      az: { translation: az },
      ru: { translation: ru },
    },
    // Do NOT set lng here — let LanguageDetector read from localStorage first.
    // If nothing is stored, fall back to English.
    fallbackLng: 'en',
    supportedLngs: ['en', 'ur', 'az', 'ru'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Check localStorage first, then browser language
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
