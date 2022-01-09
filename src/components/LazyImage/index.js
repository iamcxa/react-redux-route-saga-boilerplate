import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ effect, ...props }) => {
  const [error, setError] = React.useState(null);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return !error ? (
    <LazyLoadImage effect={effect} {...props} onError={setError} />
  ) : (
    <Skeleton variant="rectangular" {...props} />
  );
};

LazyImage.propTypes = {
  ...LazyLoadImage.propTypes,
  effect: PropTypes.string,
};

LazyImage.defaultProps = {
  ...LazyLoadImage.defaultProps,
  effect: 'blur',
};

export default LazyImage;
