import React from 'react';
import { useLocation } from 'react-router-dom';

import { GoogleAnalytics } from '~/helpers';

export default function useGoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    GoogleAnalytics.init();
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    GoogleAnalytics.sendPageview(currentPath);
  }, [location]);
}
