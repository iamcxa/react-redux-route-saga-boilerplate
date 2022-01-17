import { Box, CircularProgress, CssBaseline, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeProvider, { theme as DefaultTheme } from './Theme';

const ActivityIndicator = ({
  theme: config,
  height,
  bgColor,
  indicatorColor,
  variant,
  ...props
}) => {
  const theme = useTheme();
  const Indicator = variant === 'circle' ? CircularProgress : LinearProgress;
  const absoluteCenter = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    m: 'auto',
  };
  return (
    <ThemeProvider theme={config}>
      <CssBaseline />
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={height}
        bgcolor={theme.palette[bgColor]}
      >
        <Indicator
          sx={{
            color: indicatorColor.startsWith('#') ? indicatorColor : theme.palette[indicatorColor],
            width: variant === 'linear' && '33vw',
            ...absoluteCenter,
          }}
          {...props}
        />
      </Box>
    </ThemeProvider>
  );
};

ActivityIndicator.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgColor: PropTypes.string,
  indicatorColor: PropTypes.string,
  variant: PropTypes.oneOf(['linear', 'circle']),
  theme: PropTypes.object,
};

ActivityIndicator.defaultProps = {
  height: '100%',
  bgColor: 'transparent',
  indicatorColor: 'primary',
  variant: 'circle',
  theme: DefaultTheme,
};

export default ActivityIndicator;
