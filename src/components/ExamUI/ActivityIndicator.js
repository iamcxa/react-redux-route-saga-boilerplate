import { Box, CircularProgress, CssBaseline, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeProvider from '~/components/ExamUI/Theme';

const ActivityIndicator = ({ height, indicatorColor, bgColor, variant, ...props }) => {
  const theme = useTheme();
  const Indicator = variant === 'circle' ? CircularProgress : LinearProgress;
  return (
    <ThemeProvider>
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
};

ActivityIndicator.defaultProps = {
  height: '100%',
  bgColor: 'transparent',
  indicatorColor: 'primary',
  variant: 'circle',
};

export default ActivityIndicator;
