import { enhancer as withReduxEnhancer } from 'addon-redux';

const enhancers = [];

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(withReduxEnhancer);
}

export default enhancers;
