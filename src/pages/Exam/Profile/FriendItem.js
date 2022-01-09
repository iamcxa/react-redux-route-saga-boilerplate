import { ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

import { Button } from '~/components/ExamUI';
import LazyImage from '~/components/LazyImage';
import { Styles } from '~/theme';

const FriendItem = ({ onClick, item, index, data }) => {
  const { isFollowing, name, username } = item;
  return (
    <ListItem
      key={index}
      component="div"
      disablePadding
      secondaryAction={
        <Button
          edge="end"
          label={isFollowing ? 'Following' : 'Follow'}
          variant={isFollowing ? 'contained' : 'outlined'}
          onClick={onClick}
        />
      }
    >
      <ListItemAvatar>
        <LazyImage
          src={`https://i.pravatar.cc/150?img=${index}`}
          sizes="40px"
          variant="rounded"
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid #F8F8F8',
            borderRadius: '5px',
            objectFit: 'cover',
          }}
          placeholder={<Skeleton variant="rounded" width={40} height={40} />}
        />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={`@${username}`}
        primaryTypographyProps={{
          variant: 'body1',
          sx: Styles.profile.fontStyle.followerPrimary,
        }}
        secondaryTypographyProps={{
          variant: 'body2',
          sx: Styles.profile.fontStyle.followerSecondary,
        }}
      />
    </ListItem>
  );
};

FriendItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendItem;
