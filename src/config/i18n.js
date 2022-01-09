import Locales from '~/locales';

const i18nOptions = {
  resources: Locales,

  lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option

  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};

export default i18nOptions;
