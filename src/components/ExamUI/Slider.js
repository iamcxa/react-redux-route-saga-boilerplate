/* eslint-disable react/jsx-props-no-spreading */

import { Box, Slider as MuiSlider, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { Styles } from '~/theme';

import ThemeProvider from './Theme';
// import Typography from './Typography';

const MarkLabelComponent = ({ sx, style, children, ownerState, className, ...props }) => {
  return (
    <Typography
      {...props}
      variantMapping={{
        body1: 'span',
      }}
      style={style}
      sx={{
        ...sx,
        // position: 'absolute',
        // top: '100%',
        // marginLeft: '-2%',
        opacity: children === ownerState.value ? 1 : undefined,
      }}
    >
      {children}
    </Typography>
  );
};
MarkLabelComponent.propTypes = {
  ownerState: PropTypes.object.isRequired,
  sx: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
MarkLabelComponent.defaultProps = {
  sx: {},
  style: {},
  children: undefined,
  className: undefined,
};

const Slider = ({ width, step, valueLabelDisplay, getAriaValueText, ...props }) => {
  const StyledSlider = styled(MuiSlider)(Styles.examStyles.MuiSlider({ width }));
  return (
    <ThemeProvider>
      <Box sx={{ width }}>
        <StyledSlider
          step={step}
          valueLabelDisplay={valueLabelDisplay}
          getAriaValueText={getAriaValueText}
          // components={{
          //   MarkLabel: 'label',
          // }}
          sx={{
            '.MuiSlider-mark': {
              background: 'white',
            },
            '.MuiSlider-markActive': {
              background: 'black',
            },
            '.MuiSlider-markLabel': {
              fontFamily: 'Ubuntu',
              fontWeight: 500,
              color: 'white',
              opacity: 0.5,
            },
            '.MuiSlider-markLabelActive:last-child': {
              opacity: 1,
            },
          }}
          {...props}
        />
      </Box>
    </ThemeProvider>
  );
};

Slider.propTypes = {
  step: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  classes: PropTypes.object,
  getAriaValueText: PropTypes.func,
  valueLabelDisplay: PropTypes.oneOf(['auto', 'on', 'off']),
};

Slider.defaultProps = {
  width: undefined,
  getAriaValueText: (v) => v,
  classes: {},
  step: null,
  valueLabelDisplay: 'auto',
};

export default Slider;
