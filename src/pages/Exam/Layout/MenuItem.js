/* eslint-disable react/prop-types */
import { Badge, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from '~/components/ExamUI';
import { Colors, Styles } from '~/theme';

const getStyle = (active) => ({
  color: active ? Colors.active : Colors.inactive,
  fontSize: 32,
  width: 20,
  height: 20,
});

const MenuItem = ({ data, onClick, showLabel, to }) => {
  const theme = useTheme();
  const [active, setActive] = React.useState(false);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const location = useLocation();
  const isCurrentPathMatch = to.includes(location.pathname);
  return (
    <NavLink
      to={to}
      sx={{ textDecorationLine: 'none' }}
      style={({ isActive }) => {
        setActive(isActive);
        return {};
      }}
    >
      <ListItemButton
        key={data.key}
        alignItems="center"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: theme.spacing(1.5),
        }}
        onClick={() => {
          typeof onClick === 'function' && onClick(data.key);
        }}
      >
        <ListItemIcon
          sx={{
            justifyContent: 'center',
          }}
        >
          <Badge
            variant="dot"
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '.MuiBadge-badge': {
                backgroundColor: '#00D1FF',
                width: '7px',
                height: '7px',
                borderRadius: '3.5px',
                top: '-3px',
                right: '-3px',
              },
            }}
            invisible={active}
          >
            <data.Icon fill={active ? Colors.active : Colors.inactive} sx={getStyle(active)} />
          </Badge>
        </ListItemIcon>
        {showLabel && active && (
          <Typography
            sx={{
              ...Styles.exam.fontStyle.menu,
              color: active ? Colors.active : Colors.inactive,
            }}
          >
            {data.label}
          </Typography>
        )}
      </ListItemButton>
    </NavLink>
  );
};

MenuItem.propTypes = {
  showLabel: PropTypes.bool,
};

MenuItem.defaultProps = {
  showLabel: true,
};

export default MenuItem;
