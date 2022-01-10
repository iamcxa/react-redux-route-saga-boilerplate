import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Skeleton,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { InfiniteScrollList } from '~/components/ExamUI';
import { UserActions } from '~/store/Actions';

import { PageBar } from '../Layout/AppBar';
import TagItem from './TagItem';

const Tags = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = searchParams.get('page');
  const pageSize = searchParams.get('size');

  React.useEffect(() => {
    dispatch(UserActions.fetchGetTags(page || 1, pageSize || 10));
  }, [dispatch, page, pageSize, userStore.tag.total]);

  const getList = () => {
    return (
      <InfiniteScrollList
        selector={(state) => state.user.tag}
        ItemWrapper={ImageList}
        ItemWrapperProps={{
          cols: matches ? 2 : 5,
          direction: 'column',
        }}
        renderItem={(item, index, arr) => (
          <ImageListItem key={index}>
            <TagItem
              key={index}
              index={index}
              item={item}
              data={arr}
              onClick={() => alert(item.name)}
            />
          </ImageListItem>
        )}
        renderSkeleton={() => (
          <Stack spacing={3} direction="row">
            <Stack spacing={1} width={150}>
              <Skeleton variant="rectangular" height={150} />
              <Skeleton variant="text" />
            </Stack>
            <Stack spacing={1} width={150}>
              <Skeleton variant="rectangular" height={150} />
              <Skeleton variant="text" />
            </Stack>
            {!matches && (
              <Stack spacing={1} width={150}>
                <Skeleton variant="rectangular" height={150} />
                <Skeleton variant="text" />
              </Stack>
            )}
          </Stack>
        )}
        onFetchNext={(payload) =>
          dispatch(UserActions.fetchGetTags(payload.page + 1, payload.pageSize))
        }
      />
    );
  };

  const renderView = ({ style, ...props }) => {
    const customStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      right: matches ? 0 : '21px',
      width: '7px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} className="thumb-vertical" />;
  };
  return (
    <Scrollbars style={{ height: '100vh' }} renderThumbVertical={renderView}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          pl: !matches ? theme.spacing(10) : undefined,
        }}
      >
        <Box display="flex" flexDirection="column" mt={!matches && theme.spacing(10)}>
          <Stack spacing={2}>
            <Toolbar sx={{ display: matches ? 'block' : 'none' }} />
            <Stack spacing={3}>
              <PageBar title="Tags" />

              {getList()}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Scrollbars>
  );
};
export default Tags;
