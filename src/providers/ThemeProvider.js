import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React from 'react';

import { Global } from '~/theme';

const ThemeProvider = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiThemeProvider theme={createTheme(Global)} {...props} />;
};

ThemeProvider.propTypes = {};

ThemeProvider.defaultProps = {};

export default ThemeProvider;
