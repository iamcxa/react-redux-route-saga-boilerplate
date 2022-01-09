import Colors from './Colors';
import Fonts from './Fonts';

/**
 * This file defines the basic global component styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

const global = {
  themeName: 'Global',

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1080,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: Colors.primary,
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
    fontFamily: Fonts.fontFamily.join(','),
  },
};

export default global;
