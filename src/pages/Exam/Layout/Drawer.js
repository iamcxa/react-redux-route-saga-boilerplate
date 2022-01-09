import { Box, Drawer as MUIDrawer, List, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { RouterLink } from '~/components/ExamUI';

import AppBar from './AppBar';
import MenuItem from './MenuItem';

const getDrawerItems = ({ onClick, menu, LogoComponent, logoTo, matches, ...props }) => {
  return (
    <List
      sx={{
        ...(matches && {
          flexDirection: 'row',
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }),
      }}
    >
      {menu.map((each, index) => (
        <MenuItem key={each.key} data={each} onClick={onClick} showLabel={!matches} {...each} />
      ))}
    </List>
  );
};

const getLogo = (LogoComponent, display) => (
  <Box
    sx={{
      padding: '32px 12px 12px',
      textAlign: 'center',
      // display,
    }}
  >
    <RouterLink to="/">
      <LogoComponent style={{ margin: '0 auto' }} />
    </RouterLink>
  </Box>
);

const Drawer = ({
  hideBelowSize,
  appBarHeight,
  drawerWidth,
  menu,
  onMenuClick,
  LogoComponent,
  logoTo,
  title,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(hideBelowSize));

  const menus = getDrawerItems({ onClick: onMenuClick, menu, LogoComponent, logoTo, matches });

  return (
    <>
      <AppBar
        drawerWidth={appBarHeight}
        title={title}
        hideBelowSize={hideBelowSize}
        menu={menus}
        logo={getLogo(LogoComponent, matches && 'block')}
      />

      <MUIDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#1B1B1B',
          },
          display: matches && 'none',
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>{getLogo(LogoComponent)}</Box>
        {menus}
      </MUIDrawer>
    </>
  );
};

Drawer.propTypes = {
  drawerWidth: PropTypes.number,
  appBarHeight: PropTypes.number,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMenuClick: PropTypes.func,
  hideBelowSize: PropTypes.string.isRequired,
  LogoComponent: PropTypes.object.isRequired,
  logoTo: PropTypes.string,
  title: PropTypes.string,
};

Drawer.defaultProps = {
  drawerWidth: 80,
  appBarHeight: 66,
  logoTo: '/',
  title: '',
  onMenuClick: undefined,
};

export default Drawer;
