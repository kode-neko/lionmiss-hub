import i18next, { TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, es } from "./locale";

function initI18n(): Promise<TFunction<"translation", undefined, "translation">> {
  return i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: { translation: en },
        es: { translation: es }
      }
    });
}

export default initI18n;