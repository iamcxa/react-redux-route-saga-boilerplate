import { Provider } from 'react-redux';

import { AppStore } from '~/store';

const ReduxProvider = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Provider store={AppStore} {...props} />;
};

ReduxProvider.propTypes = {};

ReduxProvider.defaultProps = {};

export default ReduxProvider;
