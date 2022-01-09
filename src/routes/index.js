import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ActivityIndicator } from '~/components/ExamUI';
import ExamRoute from '~/pages/Exam';
import { NoMatch } from '~/pages/no-match';

const rootRoute = () => {
  return (
    <Suspense fallback={<ActivityIndicator bgcolor="background" height="100vh" />}>
      <Routes>
        <Route path="/" element={<Navigate to="exam/home" />} />

        <Route path="exam/*" element={<ExamRoute />} index />

        <Route path="*" element={<Navigate to="exam/home" />} />
      </Routes>
    </Suspense>
  );
};

export default rootRoute;
