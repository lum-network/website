import i18n from 'i18next';
import LangageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

export const resources = {
    en: {
        translation: en,
    },
} as const;

i18n.use(LangageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    resources,
    nonExplicitSupportedLngs: true,
});

export type ResourcesType = keyof typeof en;

export default i18n;
