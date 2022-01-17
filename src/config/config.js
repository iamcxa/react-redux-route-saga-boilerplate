import { lazy } from 'react';

import themes from './themes';

const config = {
  GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,

  API_VERSION: 1,
  STORE_VERSION: 0,

  auth: {
    signInURL: '/signin',
  },

  // locale: {
  //   locales,
  //   defaultLocale: parseLanguages(['en', 'de', 'ru'], 'en'),
  //   onError: (e) => {
  //     // console.warn(e)
  //   },
  // },

  menu: {
    width: 240,
    // MenuContent: lazy(() => import('../components/Menu/MenuContent')),
  },
  theme: {
    themes,
    defaultThemeID: 'default',
    defaultIsDarkMode: false,
    defaultIsRTL: false, // change this to true for default Right to Left Language support
  },
  pages: {
    LandingPage: lazy(() => import('../pages/Exam/index')),
    // LandingPage: lazy(() => import('../pages/LandingPage/LandingPage')),
    // PageNotFound: lazy(() => import('../pages/PageNotFound/PageNotFound')),
  },
};

export default config;
