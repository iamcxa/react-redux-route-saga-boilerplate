import { Grid, Toolbar, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { Colors, Styles } from '~/theme';

import Profile from '../Profile/Profile';

// eslint-disable-next-line react/display-name
const renderView = (id) => (props) => {
  return <div {...props} id={id} />;
};

const HomeLayout = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={Styles.home.containerStyle.homeWrapper(theme)}>
      <Grid
        container
        overflow="hidden"
        pl={{
          lg: theme.spacing(5),
          xs: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={10}
          height="100vh"
          // overflow="auto"
        >
          <Scrollbars renderView={renderView('mui-grid-left')} autoHide>
            <Toolbar sx={{ display: matchesXs ? 'block' : 'none', minHeight: theme.spacing(9) }} />
            <Outlet />
          </Scrollbars>
        </Grid>

        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={4}
          xl={2}
          sx={{
            display: matchesLg && 'none',
          }}
          height="100vh"
          // overflow="auto"
        >
          <Scrollbars
            renderView={renderView('mui-grid-right')}
            autoHide
            style={{ width: '375px', float: 'right', background: Colors.profileBackground }}
          >
            <Profile />
          </Scrollbars>
        </Grid>
      </Grid>
    </Box>
  );
};

HomeLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
};

export default HomeLayout;
