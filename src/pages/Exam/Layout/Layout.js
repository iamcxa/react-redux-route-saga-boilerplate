import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '~/components/ExamUI';
import Drawer from '~/pages/Exam/Layout/Drawer';

const Layout = ({ LogoIcon, menu, drawerWidth, appBarHeight, hideBelowSize }) => {
  return (
    <ThemeProvider>
      <Box display="flex" flex={1}>
        <Drawer
          LogoComponent={LogoIcon}
          logoTo="/"
          drawerWidth={drawerWidth}
          appBarHeight={appBarHeight}
          hideBelowSize={hideBelowSize}
          menu={menu}
        />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  LogoIcon: PropTypes.object.isRequired,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  drawerWidth: PropTypes.number.isRequired,
  appBarHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  hideBelowSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  // AppBar: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // Drawer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // Children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Layout.defaultProps = {
  // maxWidth: false,
};

export default Layout;
