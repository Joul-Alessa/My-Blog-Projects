import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Carga archivos JSON
  .use(LanguageDetector) // Detecta el idioma
  .use(initReactI18next) // Integración con React
  .init({
    supportedLngs: ['en', 'es'], // Idiomas soportados
    fallbackLng: 'es', // Idioma por defecto
    debug: true, // Desactiva en producción
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta a los archivos de traducción
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'], // Prioridad para detectar el idioma
      caches: ['cookie'], // Dónde guardar el idioma detectado
    },
    interpolation: {
      escapeValue: false, // React ya maneja el escape
    },
  });

export default i18n;
