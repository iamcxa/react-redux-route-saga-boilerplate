import { Button as MuiButton, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Styles } from '~/theme';
import Colors from '~/theme/Colors';

import ThemeProvider from './Theme';

const getPairStyles = (variant) => {
  const style = {
    margin: 0,
    color: Colors.dark,
    fontSize: '12px',
    lingHeight: '100%',
    fontFamily: 'Open Sans',
    textTransform: 'capitalize',
    border: '1px solid #FFFFFF',
    borderRadius: '20px',
    boxShadow: 0,
    '&:hover': {
      border: '1px solid #FFFFFF',
    },
  };
  switch (variant) {
    default:
      return {
        ...style,
        fontSize: '14px',
        lingHeight: '14px',
        fontFamily: 'Ubuntu',
        textTransform: 'uppercase',
        width: '335px',
        fontWeight: 700,
        borderRadius: '4px',
        backgroundColor: Colors.light,
        '&:hover': {
          backgroundColor: Colors.dark,
          color: Colors.light,
        },
      };

    case 'contained':
      return {
        ...style,
        backgroundColor: Colors.light,
        '&:hover': {
          backgroundColor: Colors.dark,
          color: Colors.light,
        },
      };

    case 'outlined':
      return {
        ...style,
        color: Colors.light,
        backgroundColor: Colors.dark,
        '&:hover': {
          backgroundColor: Colors.light,
          color: Colors.dark,
          border: '1px solid #FFFFFF',
        },
      };
  }
};

// eslint-disable-next-line react/prop-types
const Button = ({ variant, label, children, onClick, to, ...props }) => {
  const StyledButton = styled(MuiButton)(getPairStyles(variant));
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      return onClick(e);
    }
    return navigate(to);
  };
  return (
    <ThemeProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledButton onClick={handleClick} {...props}>
        {label || children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
