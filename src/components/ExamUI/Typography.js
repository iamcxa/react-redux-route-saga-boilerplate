import { styled, Typography as MuiTypography } from '@mui/material';

import { Styles } from '~/theme';

import ThemeProvider from './Theme';

const Typography = (props) => {
  const StyledTypography = styled(MuiTypography)(Styles.examStyles.MuiTypography({}));
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ThemeProvider>
      <StyledTypography {...props} />
    </ThemeProvider>
  );
};

export default Typography;
