import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Divider, Skeleton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';

import ThemeProvider from '~/components/ExamUI/Theme';

const getLoader = (theme) => (
  <Box height={theme.spacing(5)}>
    <Divider color="primary">
      <RefreshIcon
        sx={{
          color: theme.palette.divider,
          animation: 'loader .5s ease-in infinite alternate',
          '@keyframes loader': {
            '50%': {
              transform: 'rotate(.5turn)',
            },
          },
        }}
      />
    </Divider>
  </Box>
);

const getSkeleton = (renderSkeleton) => {
  return typeof renderSkeleton === 'function' ? (
    renderSkeleton()
  ) : (
    <Stack spacing={1} width={219}>
      <Skeleton variant="rectangular" height={146} />
      <Skeleton variant="text" />
    </Stack>
  );
};

const getEndMessage = (theme, isFetching, renderSkeleton) =>
  isFetching ? (
    getSkeleton(renderSkeleton)
  ) : (
    <Box height={theme.spacing(5)}>
      <Divider color="primary">
        <DoneOutlineIcon
          sx={{
            color: theme.palette.divider,
            animation: 'finisher .5s ease-in infinite alternate',
            transform: 'rotate(.95turn)',
            '@keyframes finisher': {
              '50%': {
                transform: 'rotate(.98turn)',
              },
              '100%': {
                transform: 'rotate(1turn)',
              },
            },
          }}
        />
      </Divider>
    </Box>
  );

const Index = ({
  selector,
  ItemWrapper,
  ItemWrapperProps,
  renderItem,
  renderSkeleton,
  onFetchNext,
  ...props
}) => {
  const source = useSelector(selector);
  const theme = useTheme();
  if (source) {
    return (
      <ThemeProvider>
        <InfiniteScroll
          dataLength={source.items.length}
          next={() => onFetchNext(source)}
          hasMore={source.hasMore}
          loader={getLoader(theme)}
          endMessage={getEndMessage(theme, source.isFetching, renderSkeleton)}
          // pullDownToRefresh
          // pullDownToRefreshContent={getLoader(theme)}
          // refreshFunction={() => onFetchNext(source)}
          // releaseToRefreshContent={getLoader(theme)}
          className="infinite-scroll-list"
          {...props}
        >
          {typeof ItemWrapper === 'object' ? (
            <ItemWrapper {...ItemWrapperProps}>{source.items.map(renderItem)}</ItemWrapper>
          ) : (
            source.items.map(renderItem)
          )}
        </InfiniteScroll>
      </ThemeProvider>
    );
  }
  return null;
};

Index.propTypes = {
  selector: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  renderSkeleton: PropTypes.func,
  onFetchNext: PropTypes.func.isRequired,

  ItemWrapper: PropTypes.object,
  ItemWrapperProps: PropTypes.object,
};

Index.defaultProps = {
  renderSkeleton: undefined,
  ItemWrapper: undefined,
  ItemWrapperProps: undefined,
};

export default Index;
