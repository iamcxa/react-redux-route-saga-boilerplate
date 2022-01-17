import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ActivityIndicator } from '~/components/ExamUI';
import { useGoogleAnalytics } from '~/hooks';
import ExamRoute from '~/pages/Exam';
import { NoMatch } from '~/pages/no-match';

const rootRoute = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGoogleAnalytics();
  return (
    <Suspense fallback={<ActivityIndicator bgColor="background" height="100vh" />}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React App</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="exam/home" />} />

        <Route path="exam/*" element={<ExamRoute />} index />

        <Route path="*" element={<Navigate to="exam/home" />} />
      </Routes>
    </Suspense>
  );
};

export default rootRoute;
