/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Classes from './Classes';
import Colors from './Colors';
import Fonts from './Fonts';

const styles = {
  profile: {
    fontStyle: {
      followerPrimary: {
        color: Colors.light,
        fontFamily: 'Ubuntu',
      },
      followerSecondary: {
        color: Colors.light,
        fontFamily: 'Ubuntu',
        opacity: 0.5,
      },
    },
  },

  home: {
    containerStyle: {
      homeWrapper: (theme) => ({
        display: 'flex',
        flex: 1,
        pt: theme.spacing(0),
      }),
    },
  },

  exam: {
    fontStyle: {
      logo: {
        fontFamily: 'Ubuntu',
        fontWeight: '700',
        background: '-webkit-linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
      },
      menu: {
        fontFamily: 'Ubuntu',
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.4px',
      },
    },
  },

  Text: {
    sectionTitle: {
      ...Fonts.style.h5,
      color: Colors.light,
    },
    headline: {
      ...Fonts.style.h4,
      ...Fonts.style.italic,
      color: Colors.light,
    },
  },

  Button: {
    fontStyle: {
      contained: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '20px',
        lingHeight: '24px',
        textAlign: 'center',
        letterSpacing: '1.25px',
        textTransform: 'uppercase',
        color: Colors.dark,
        height: '72px',
      },
      outlined: {
        color: Colors.light,
        letterSpacing: '0.88px',
        fontSize: '14px',
        lingHeight: '18px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
      text: {
        color: Colors.light,
        fontWeight: 400,
        letterSpacing: '0.44px',
        fontSize: '14px',
        lingHeight: '18px',
        textTransform: 'capitalize',
        '&:hover': {
          color: Colors.primary,
        },
        '&:focus': {
          fontWeight: 600,
        },
      },
      text2: {
        color: Colors.primary,
        textDecorationLine: 'underline',
        fontWeight: 500,
        '&:hover': {
          color: Colors.light,
          textDecorationLine: 'underline',
        },
      },
      link: {
        color: Colors.primary,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        fontSize: '16px',
        lingHeight: '24px',
        textDecorationLine: 'underline',
        '&:hover': {
          color: Colors.light,
          textDecorationLine: 'underline',
        },
      },
    },
    containerStyle: {
      contained: {
        padding: '24px',
        borderRadius: '8px',
        border: `1px solid ${Colors.primary}`,
        backgroundColor: Colors.primary,
        '&:hover': {
          border: `1px solid ${Colors.light}`,
          backgroundColor: Colors.light,
        },
      },
      outlined: {
        border: `1px solid ${Colors.light}`,
        borderRadius: '8px',
        backgroundColor: 'transparent',
        '&:hover': {
          border: `1px solid ${Colors.light}`,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
      },
      text: {
        backgroundColor: 'transparent',
        width: 'auto',
        height: 'auto',
        padding: 0,
        borderRadius: 0,
        border: 0,
        '&:hover': {
          border: 0,
          backgroundColor: 'transparent',
        },
      },
      logo: {
        color: Colors.light,
        '&:hover': {
          fill: Colors.primary,
        },
        '.App-logo': {
          fill: Colors.light,
          '&:hover': {
            fill: Colors.primary,
          },
        },
      },
    },
  },

  Chip: {
    fontStyle: {
      contained: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '16px',
        fontWeight: 600,
        letterSpacing: '0.44px',
        textAlign: 'left',
        color: Colors.light,
      },
      outlined: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        lineHeight: '16px',
        fontWeight: 600,
        letterSpacing: '0.44px',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#949494',
        '&:focus': {
          color: Colors.light,
        },
        '&:hover': {
          color: '#ABABAB',
        },
      },
    },
    containerStyle: {
      contained: {
        border: '1px solid #949494',
        background: '#949494',
        borderRadius: '8px',
        padding: '6px 16px',
        '&:hover': {
          border: `1px solid ${Colors.primary}`,
          background: Colors.primary,
        },
        '&:focus': {
          border: `1px solid ${Colors.primary}`,
          background: Colors.primary,
        },
      },
      outlined: {
        border: '1px solid #949494',
        borderRadius: '8px',
        padding: '6px 10px',
        background: 'transparent',
        '&:hover': {
          border: '1px solid #949494',
          background: '#FFFFFF1A',
        },
        '&:focus': {
          border: `1px solid ${Colors.primary}`,
          background: Colors.primary,
        },
      },
    },
  },

  Accordion: {
    fontStyle: {
      roadmapTitle: {
        ...Fonts.style.h6,
        whiteSpace: 'pre-wrap',
        color: Colors.light,

        display: 'flex',
        flexDirection: {
          lg: 'row',
          sm: 'row',
          xs: 'column',
        },
      },
      faqTitle: {
        ...Fonts.style.h6,
        color: Colors.light,
        maxWidth: '95%',
      },
      storyTitle: {
        ...Fonts.style.h4,
        ...Fonts.style.italic,
        color: Colors.primary,
      },
      highlightTitle: {
        ...Fonts.style.h4,
        color: Colors.light,
      },
      content: {
        ...Fonts.style.body,
        color: Colors.light,
      },
    },
    containerStyle: {},
  },

  Founder: {
    containerStyle: {
      cardWrapper: {
        background: Colors.cardBackground,
        borderRadius: '8px',
        // padding: '24px',
      },
      headlineWrapper: {
        ...Classes.rowCenter,
        mb: '32px',
      },
    },
    fontStyle: {
      title: {
        ...Fonts.style.h6,
        fontWeight: 700,
        fontStyle: 'italic',
        lineHeight: '36px',
        color: Colors.primary,
        mb: '24px',
      },
      description: {
        ...Fonts.style.body,
        color: Colors.light,
        fontStyle: 'italic',
      },
    },
  },

  Header: {
    fontStyle: {
      title: {
        ...Fonts.style.body,
        color: Colors.light,
        flexGrow: 1,
        fontWeight: 'bold',
        letterSpacing: 0.18,
        fontSize: {
          sm: Fonts.style.body.fontSize,
          md: '24px',
        },
        lineHeight: {
          sm: Fonts.style.body.lineHeight,
          md: '36px',
        },
      },
    },
    containerStyle: {
      centerWrapper: {
        ...Classes.showAboveMd,
        ...Classes.mainCenter,
        flexGrow: 1,
      },
      rightWrapper: {
        ...Classes.showAboveMd,
        ...Classes.mainEnd,
        // flex: 0.5,
        // display: 'flex',
        // justifyContent: 'flex-end',
        flexGrow: 1,
      },
    },
  },

  Story: {
    fontStyle: {
      content: {
        ...Fonts.style.body,
        color: Colors.light,
        marginBottom: '16px',
        whiteSpace: 'break-spaces',
      },
      footnote: {
        ...Fonts.style.body,
        color: Colors.textDark,
      },
    },
  },
};

styles.examStyles = {
  MuiLink: ({}) => ({}),

  MuiButton: ({}) => ({}),

  MuiTypography: ({}) => ({
    // fontFamily: 'Ubuntu',
    // color: Colors.light,
  }),

  MuiInput: ({ width }) => ({
    margin: 0,
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: '14px',
    color: 'white',
    lineHeight: '150%',
    letterSpacing: '0.25px',
    border: '3px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '6px',
    maxHeight: '60px',
    padding: '18px 20px',
    background: 'transparent',
    width,
    '&.Mui-focused': {
      background: 'transparent',
      fontWeight: 400,
      color: 'white',
      border: '3px solid rgba(255, 155, 51, 1)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '&::placeholder': {
      fontFamily: 'Ubuntu',
      opacity: 0.3,
    },
  }),

  MuiSlider: (width) => ({
    color: '#fff',
    height: 8,
    '& .MuiSlider-mark': {
      color: 'transparent',
    },
    '& .MuiSlider-markLabel': {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      color: '#fff',
      opacity: 0.5,
    },
    // '& .MuiSlider-markLabelActive': {
    //   opacity: 1,
    // },
    '& .MuiSlider-rail': {
      border: 'none',
      opacity: 0.3,
    },
    '& .MuiSlider-track': {
      border: 'none',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
    },
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      background: '#1B1B1B',
      border: '6px solid #FFD05D',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
  }),
};

export default styles;
