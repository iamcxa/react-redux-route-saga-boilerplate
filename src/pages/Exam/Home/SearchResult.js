import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Container, ImageList, Skeleton, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { InfiniteScrollList } from '~/components/ExamUI';
import { PageBar } from '~/pages/Exam/Layout/AppBar';
import { UserActions } from '~/store/Actions';

import SearchItem from './SearchItem';

const SearchResult = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = searchParams.get('page');
  const pageSize = searchParams.get('size') || 10;
  const keyword = searchParams.get('keyword');

  React.useEffect(() => {
    if (!page) {
      navigate('/exam');
    }
    if (page !== 1 && userStore.userByKeyword.total < 1 && userStore.userByKeyword.page !== page) {
      dispatch(UserActions.fetchGetUsersByKeyword(1, page * pageSize, keyword));
      // setSearchParams({ page, size: pageSize, keyword });
    } else {
      dispatch(UserActions.fetchGetUsersByKeyword(page, pageSize, keyword));
    }
  }, [
    dispatch,
    keyword,
    navigate,
    page,
    pageSize,
    setSearchParams,
    userStore.userByKeyword.page,
    userStore.userByKeyword.total,
  ]);

  const getList = () => {
    return (
      <InfiniteScrollList
        scrollableTarget="mui-grid-left"
        selector={(state) => state.user.userByKeyword}
        ItemWrapper={ImageList}
        ItemWrapperProps={{
          cols: matches ? 1 : 3,
          spacing: 3,
          direction: 'column',
        }}
        renderItem={(item, index, arr) => (
          <SearchItem index={index} item={item} data={arr} onClick={() => alert(item.name)} />
        )}
        renderSkeleton={() => (
          <Stack spacing={3} direction="row">
            <Stack spacing={1} width={matches ? 335 : 219}>
              <Skeleton variant="rectangular" height={146} />
              <Skeleton variant="text" />
            </Stack>
            {!matches && (
              <>
                <Stack spacing={1} width={219}>
                  <Skeleton variant="rectangular" height={146} />
                  <Skeleton variant="text" />
                </Stack>
                <Stack spacing={1} width={219}>
                  <Skeleton variant="rectangular" height={146} />
                  <Skeleton variant="text" />
                </Stack>
              </>
            )}
          </Stack>
        )}
        onFetchNext={(payload) => {
          const page = payload.page + 1;
          dispatch(UserActions.fetchGetUsersByKeyword(page, payload.pageSize, keyword));
          if (keyword) {
            setSearchParams({ page, size: pageSize, keyword });
          } else {
            setSearchParams({ page, size: pageSize });
          }
        }}
      />
    );
  };
  return (
    <Box display="flex" flexDirection="column" width="100%" pt={!matches && theme.spacing(11)}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          pl: !matches ? theme.spacing(10) : undefined,
        }}
      >
        <Box display="flex" flexDirection="column">
          <Stack spacing={matches ? 0 : 3}>
            {matches && <PageBar Icon={ArrowBackIosNewIcon} zIndex={5000} />}
            {matches && <PageBar title="Results" />}
            {!matches && <PageBar Icon={ArrowBackIosNewIcon} title="Results" />}

            <Box pl={!matches && theme.spacing(6)}>{getList()}</Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default SearchResult;
