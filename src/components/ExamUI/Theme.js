import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { Colors, Fonts } from '~/theme';

/**
 * This file defines the basic global component styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1440,
      xl: 1536,
    },
  },

  palette: {
    mode: 'dark',
    background: {
      default: '#181818',
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
    warning: {
      main: Colors.warning,
    },
    info: {
      main: Colors.info,
    },
    success: {
      main: Colors.success,
    },
    light: {
      main: Colors.light,
    },
    dark: {
      main: Colors.dark,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  typography: {
    fontFamily: 'Ubuntu',
    color: Colors.light,
    h5: {
      color: Colors.light,
    },
    subtitle1: {
      fontWeight: 'bold',
      fontFamily: 'Ubuntu',
    },
  },
});

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
