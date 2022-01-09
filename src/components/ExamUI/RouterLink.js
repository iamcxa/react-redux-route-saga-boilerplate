import { Link as MuiLink, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { Styles } from '~/theme';

import ThemeProvider from './Theme';

const Link = (props) => {
  const StyledLink = styled(MuiLink)(Styles.examStyles.MuiLink({}));
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ThemeProvider>
      <StyledLink component={RouterLink} {...props} />
    </ThemeProvider>
  );
};

export default Link;
