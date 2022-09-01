// import from node modules
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import Backend2 from 'i18next-http-backend';
import Chained from 'i18next-chained-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Chained)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      backends: [
        Backend,
        Backend2
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },{
      loadPath: '/master/locales/{{lng}}/{{ns}}.json',
      }]
    }
  });



  export default i18n;