import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor } from '~/store';

const PersistProvider = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PersistGate persistor={persistor} {...props} />;
};

PersistProvider.propTypes = {};

PersistProvider.defaultProps = {};

export default PersistProvider;
