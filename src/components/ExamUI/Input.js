import { Box, Input as MuiInput, styled } from '@mui/material';

import { Styles } from '~/theme';

import ThemeProvider from './Theme';

// eslint-disable-next-line react/prop-types
const Input = ({ width, ...props }) => {
  const StyledInput = styled(MuiInput)(Styles.examStyles.MuiInput({ width }));
  return (
    <ThemeProvider>
      <Box sx={{ width }}>
        <StyledInput {...props} />
      </Box>
    </ThemeProvider>
  );
};

export default Input;
