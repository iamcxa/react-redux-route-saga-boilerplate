import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBar, Box, Skeleton, Stack, styled, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { InfiniteScrollList, Typography } from '~/components/ExamUI';
import { UserActions } from '~/store/Actions';
import { Colors } from '~/theme';

import FriendItem from './FriendItem';

const StyledTab = styled(Tab)({
  paddingBottom: 0,
});

const getTabLabel = (value, text, currentValue) => {
  return (
    <Typography
      variant="subtitle1"
      sx={{
        color: currentValue === value ? Colors.light : '#929292',
      }}
    >
      {text}
    </Typography>
  );
};

const Profile = () => {
  const appBarRef = React.useRef();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const [value, setValue] = React.useState('followers');
  const [minHeight, setMinHeight] = React.useState('100%');

  const handleChange = (event, newValue) => {
    // console.log('newValue=>', newValue);
    setValue(newValue);
  };

  const getList = (typeName, actionName) => {
    return (
      <InfiniteScrollList
        scrollableTarget="mui-grid-right"
        selector={(state) => state.user[typeName]}
        renderItem={(item, index, arr) => (
          <FriendItem
            key={index}
            index={index}
            item={item}
            data={arr}
            onClick={() => alert(item.name)}
          />
        )}
        renderSkeleton={() => (
          <Stack spacing={1} width="100%">
            <Stack spacing={1} direction="row" alignItems="center">
              <Skeleton variant="text" width={40} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width={40} />
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center">
              <Skeleton variant="text" width={40} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width={40} />
            </Stack>
            <Stack spacing={1} direction="row" alignItems="center">
              <Skeleton variant="text" width={40} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width={40} />
            </Stack>
          </Stack>
        )}
        onFetchNext={(payload) =>
          dispatch(UserActions[actionName](payload.page + 1, payload.pageSize))
        }
      />
    );
  };

  React.useEffect(() => {
    if (appBarRef && appBarRef.current) {
      setMinHeight(`calc(100vh - ${appBarRef.current.clientHeight}px)`);
    }
    if (userStore.user.total < 0) {
      dispatch(UserActions.fetchGetUsers(1));
    }
    if (userStore.friend.total < 0) {
      dispatch(UserActions.fetchGetFriends(1));
    }
  }, [
    minHeight,
    dispatch,
    userStore.user.total,
    userStore.friend.total,
    userStore.user.isFetching,
    userStore.friend.isFetching,
  ]);
  return (
    <TabContext value={value}>
      <AppBar
        ref={appBarRef}
        position="sticky"
        sx={{
          backgroundImage: 'none',
          background: Colors.profileBackground,
          border: 'none',
          boxShadow: 'none',
          pt: theme.spacing(1.5),
          borderBottom: 2,
          borderColor: Colors.profileBorder,
        }}
      >
        <Box sx={{}}>
          <TabList onChange={handleChange} aria-label="followers/following" variant="fullWidth">
            <StyledTab
              label={getTabLabel('followers', t('exam.profile.followers'), value)}
              value="followers"
            />
            <StyledTab
              label={getTabLabel('following', t('exam.profile.following'), value)}
              value="following"
            />
          </TabList>
        </Box>
      </AppBar>
      <TabPanel value="followers" sx={{ minHeight }}>
        {getList('user', 'fetchGetUsers')}
      </TabPanel>
      <TabPanel value="following" sx={{ minHeight }}>
        {getList('friend', 'fetchGetFriends')}
      </TabPanel>
    </TabContext>
  );
};

export default Profile;
