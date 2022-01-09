import { get } from 'lodash';

// import { Dialog } from '~/Helper';

export default (error, canceler) => {
  if (
    typeof error.message === 'string' &&
    (error.message.includes('Network Error') || error.message.includes('timeout'))
  ) {
    if (canceler) {
      canceler.cancel(`${error.status} - ${get(error, 'data.message', error.message)}`);
    }
    // Dialog.showServiceUnavailableAlert(error);
    console.log('error=>', error);
    alert(error.message);
  } else {
    console.log('error=>', error);
    alert(error.message);
    // Dialog.showApiExceptionAlert(error);
  }
};
