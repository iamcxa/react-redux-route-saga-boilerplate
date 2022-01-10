import { Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Slider, Typography } from '~/components/ExamUI';
import { UserActions } from '~/store/Actions';

const searchResultPerPages = [
  {
    value: 0,
    label: 3,
  },
  {
    value: 10,
    label: 6,
  },
  {
    value: 20,
    label: 9,
  },
  {
    value: 30,
    label: 12,
  },
  {
    value: 40,
    label: 15,
  },
  {
    value: 50,
    label: 50,
  },
];

const Home = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userByKeyword = useSelector((state) => state.user.userByKeyword);
  const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));

  const { page, pageSize } = userByKeyword;
  const [keyword, setKeyword] = React.useState('');

  const valueTransformer = (val) => {
    switch (val) {
      default:
      case 0:
        return 6;
      case 10:
        return 12;
      case 20:
        return 18;
      case 30:
        return 24;
      case 40:
        return 30;
      case 50:
        return 100;
    }
  };
  const searchPath = `/exam/home/search?page=1&size=${valueTransformer(pageSize)}${
    keyword ? `&keyword=${keyword}` : ''
  }`;
  return (
    <Box
      maxWidth="725px"
      display="flex"
      flexGrow={1}
      flexDirection="column"
      width="100%"
      mt={!matchesXs && theme.spacing(5.5)}
      mx="auto"
      p={{
        xs: theme.spacing(2.5),
      }}
      pt={matchesXs ? theme.spacing(1) : 0}
    >
      <Stack spacing={3.75}>
        <Stack spacing={matchesXs ? 2 : 2.5}>
          <Typography
            variant="h5"
            sx={{
              flexDirection: 'column',
              display: 'flex',
              // mb: theme.spacing(2.5),
            }}
          >
            {t('exam.home.search')}
          </Typography>

          <Input
            autoFocus
            width="100%"
            placeholder="Keyword"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyPress={(event) => {
              if (event.keyCode === '13') {
                navigate(searchPath);
              }
            }}
          />
        </Stack>

        <Divider
          sx={{
            display: matchesXs && 'none',
          }}
        />

        <Stack spacing={matchesXs ? 2 : 2.5}>
          <Typography variant="h5"># Of Results Per Page</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              display: 'flex',
              fontWeight: '400',
              color: 'white',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                // marginBottom: '-4px',
                marginRight: '10px',
                fontWeight: 'bold',
              }}
            >
              {valueTransformer(pageSize)}
            </Typography>
            results
          </Typography>

          <Slider
            width="100%"
            defaultValue={pageSize}
            value={pageSize}
            marks={searchResultPerPages}
            min={0}
            max={50}
            getAriaValueText={valueTransformer}
            valueLabelFormat={valueTransformer}
            onChangeCommitted={(event, value) => {
              dispatch(
                UserActions.updateUserStore({
                  userByKeyword: {
                    ...userByKeyword,
                    pageSize: value,
                  },
                }),
              );
            }}
          />
        </Stack>

        <Divider
          sx={{
            display: matchesXs && 'none',
          }}
        />
      </Stack>

      <Button
        label="search"
        variant="normal"
        sx={{
          position: 'fixed',
          bottom: '10.34%',
        }}
        onClick={() => navigate(searchPath)}
      />
    </Box>
  );
};

Home.propTypes = {};

export default Home;
