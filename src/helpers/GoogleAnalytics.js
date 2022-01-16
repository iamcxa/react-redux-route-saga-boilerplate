import ReactGA from 'react-ga';

import Config from '~/config';

const checkGaId = (cb) => {
  if (Config.GA_TRACKING_ID) {
    cb();
  } else {
    console.warn('Google Analytics ID is missing, please add it to config file.');
  }
};

function init() {
  checkGaId(() => {
    // Enable debug mode on the local development environment
    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    ReactGA.initialize(Config.GA_TRACKING_ID, { debug: isDev });
  });
}

function sendEvent(payload) {
  checkGaId(() => {
    ReactGA.event(payload);
  });
}

function sendPageview(path) {
  checkGaId(() => {
    ReactGA.set({ page: path });
    ReactGA.pageview(path);
  });
}

const reactGaHelper = {
  init,
  sendEvent,
  sendPageview,
};

export default reactGaHelper;
