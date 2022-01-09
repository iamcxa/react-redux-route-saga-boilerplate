import { Box, ButtonBase, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';

import { Typography } from '~/components/ExamUI';
import { Styles } from '~/theme';

const TagItem = ({ onClick, item, index, data }) => {
  const { name, count } = item;
  const theme = useTheme();
  return (
    <ButtonBase
      onClick={onClick}
      variant="text"
      sx={{
        mb: theme.spacing(2),
      }}
    >
      <Box key={index} display="flex" flexDirection="column">
        <Box
          display="flex"
          alignItems="end"
          justifyContent="start"
          textAlign="left"
          sx={{
            width: '150px',
            height: '150px',
            backgroundColor: 'rgb(255 255 255 / 6%)',
            borderRadius: '10px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              width: '150px',
              border: '4px solid #FFFFFF',
              borderRadius: theme.spacing(1),
              m: '10px',
              p: '7px 14px',
            }}
            noWrap
          >
            {name}
          </Typography>
        </Box>
        <ListItemText
          primary={name}
          secondary={`${count} Results`}
          sx={{ width: '150px', mt: theme.spacing(1) }}
          primaryTypographyProps={{
            variant: 'body1',
            sx: Styles.profile.fontStyle.followerPrimary,
            noWrap: true,
            textAlign: 'left',
          }}
          secondaryTypographyProps={{
            variant: 'body2',
            sx: Styles.profile.fontStyle.followerSecondary,
            textAlign: 'left',
          }}
        />
      </Box>
    </ButtonBase>
  );
};

TagItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagItem;
