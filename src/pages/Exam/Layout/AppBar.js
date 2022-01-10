/* eslint-disable react/prop-types */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  AppBar as MUIAppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { RouterLink } from '~/components/ExamUI';
import { Colors } from '~/theme';

const AppBar = ({ drawerWidth, title, menu, logo }) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));

  const { pathname } = useLocation();
  const matchHome = '/exam/home'.includes(pathname);
  const matchSearch = '/exam/home/search'.includes(pathname);
  const matchTag = '/exam/tag'.includes(pathname);
  return (
    <>
      <MUIAppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          display: 'none',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </MUIAppBar>

      {!matchHome && matchesXs && (
        <PageBar Icon={ArrowBackIosNewIcon} position="fixed" zIndex={5000} pl={theme.spacing(3)} />
      )}
      {matchHome && matchesXs && (
        <>
          <MUIAppBar
            position="fixed"
            sx={{
              backgroundImage: 'none',
              background: Colors.bodyBackground,
              border: 'none',
              boxShadow: 'none',
              top: 0,
              bottom: 'auto',
              // display: matchesXs ? 'flex' : 'none',
            }}
          >
            <Toolbar>{logo}</Toolbar>
          </MUIAppBar>

          <MUIAppBar
            position="fixed"
            color="primary"
            sx={{
              top: 'auto',
              bottom: 0,
              // display: matchesXs ? 'flex' : 'none',
              background: 'rgba(24, 24, 24, 0.2)',
              boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(54.3656px)',
            }}
          >
            <Toolbar>{menu}</Toolbar>
          </MUIAppBar>
        </>
      )}
    </>
  );
};

export default AppBar;

export const PageBar = ({
  Icon,
  position = 'sticky',
  display = 'flex',
  title = 'Home Page',
  to = '/exam/home',
  zIndex,
  ...props
}) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <MUIAppBar
      position={position}
      sx={{
        backgroundImage: 'none',
        background: Colors.bodyBackground,
        border: 'none',
        boxShadow: 'none',
        display,
        pt: matchesXs && theme.spacing(2),
        pl: matchesXs && theme.spacing(0.5),
        zIndex,
        ...props,
      }}
    >
      <Toolbar variant="dense" disableGutters={matchesXs}>
        <Stack spacing={1} direction="row" alignItems="center">
          {Icon && (
            <RouterLink to={to}>
              <IconButton edge="start" aria-label="back">
                <Icon color="primary" />
              </IconButton>
            </RouterLink>
          )}

          <Typography variant="h4" color="primary" sx={{ fontSize: matchesXs ? '24px' : '30px' }}>
            {title}
          </Typography>
        </Stack>
      </Toolbar>
    </MUIAppBar>
  );
};
