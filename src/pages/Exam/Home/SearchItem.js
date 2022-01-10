import {
  Box,
  ButtonBase,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';

import LazyImage from '~/components/LazyImage';
import { Styles } from '~/theme';

const SearchItem = ({ onClick, item, index, data }) => {
  const { name, username } = item;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ButtonBase
      onClick={onClick}
      variant="text"
      sx={{
        // mr: '34px',
        mt: theme.spacing(2),
      }}
    >
      <Box key={index} display="flex" flexDirection="column">
        <ListItemAvatar>
          <LazyImage
            src={`https://i.pravatar.cc/150?img=${index}`}
            variant="rounded"
            style={{
              width: matches ? '335px' : '219px',
              height: matches ? '222px' : '164px',
              borderRadius: 0,
              objectFit: 'cover',
            }}
            placeholder={<Skeleton variant="rectangular" width={219} height={164} />}
          />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={`@${username}`}
          sx={{ textAlign: 'left' }}
          primaryTypographyProps={{
            variant: 'body1',
            sx: Styles.profile.fontStyle.followerPrimary,
          }}
          secondaryTypographyProps={{
            variant: 'body2',
            sx: Styles.profile.fontStyle.followerSecondary,
          }}
        />
      </Box>
    </ButtonBase>
  );
};

SearchItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchItem;
