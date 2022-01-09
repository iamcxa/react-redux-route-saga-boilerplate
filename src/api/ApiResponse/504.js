import { get } from 'lodash';

// import { Dialog } from '~/helper';

export default (error, canceler) => {
  if (canceler) {
    canceler.cancel(`${error.status} - ${get(error, 'data.message', error.message)}`);
  }
  // Dialog.showServiceUnavailableAlert(error);
};
