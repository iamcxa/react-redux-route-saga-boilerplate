import { CssBaseline } from '@mui/material';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '~/assets/logo.svg';
import { ReactComponent as MenuIcon } from '~/assets/menu.svg';
import { ActivityIndicator, ThemeProvider } from '~/components/ExamUI';

const Home = lazy(() => import('./Home/Home'));
const SearchResult = lazy(() => import('./Home/SearchResult'));
const HomeLayout = lazy(() => import('./Home/Layout'));
const MainLayout = lazy(() => import('./Layout/Layout'));
const Tag = lazy(() => import('./Tag/Tag'));

const wrapLoader = (Comp, props) => (
  <React.Suspense fallback={<ActivityIndicator bgColor="background" height="100vh" />}>
    <Comp {...props} />
  </React.Suspense>
);

const ExamRoute = () => {
  const menu = [
    {
      key: 'home',
      label: 'Home',
      to: '/exam/home',
      Icon: MenuIcon,
    },
    {
      key: 'tag',
      label: 'Tag',
      to: '/exam/tag',
      Icon: MenuIcon,
    },
  ];

  return (
    <ThemeProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />

        <Route
          element={wrapLoader(MainLayout, {
            LogoIcon,
            menu,
            drawerWidth: 80,
            appBarHeight: 66,
            hideBelowSize: 'sm',
          })}
        >
          <Route element={wrapLoader(HomeLayout)}>
            <Route path="home" element={wrapLoader(Home)} index />
            <Route path="home/search" element={wrapLoader(SearchResult)} />
          </Route>
          <Route path="tag" element={wrapLoader(Tag)} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default ExamRoute;
