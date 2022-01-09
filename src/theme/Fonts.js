const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 34,
  h5: 24,
  h6: 20,
  body: 16,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
};

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontFamily: 'Montserrat',
    fontSize: size.h4,
    fontWeight: '700',
    lineHeight: '44px',
  },
  h5: {
    fontSize: size.h5,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    lineHeight: '24px',
    letterSpacing: 0.21,
  },
  h6: {
    fontSize: size.h6,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: 0.15,
  },
  small: {
    fontSize: size.small,
  },
  small500: {
    fontSize: size.small,
    fontWeight: '500',
  },
  small600: {
    fontSize: size.small,
    fontWeight: '600',
  },
  normal: {
    fontSize: size.normal,
  },
  normal500: {
    fontSize: size.normal,
    fontWeight: 'bold',
  },
  regular: {
    fontSize: size.regular,
  },
  regular500: {
    fontSize: size.regular,
    fontWeight: '500',
  },
  medium: {
    fontSize: size.medium,
  },
  medium400: {
    fontSize: size.medium,
    fontWeight: '400',
  },
  medium500: {
    fontSize: size.medium,
    fontWeight: '500',
  },
  medium600: {
    fontSize: size.medium,
    fontWeight: '600',
  },
  mediumBold: {
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  input: {
    fontSize: size.input,
  },
  input500: {
    fontSize: size.input,
    fontWeight: '500',
  },
  body: {
    fontSize: size.body,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: 0.5,
  },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  underline: { textDecorationLine: 'underline' },
};

const fonts = {
  size,
  style,
  fontFamily: [
    'Montserrat',
    // , 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
  ],
};

export default fonts;
