import { ApiProvider } from '@udea-io/axios-wrapper/dist/store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PersistProvider from './providers/PersistProvider';
import ReduxProvider from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import Route from './routes';

const app = () => {
  return (
    <ReduxProvider>
      <ApiProvider />
      <PersistProvider loading={null}>
        <ThemeProvider>
          <BrowserRouter>
            <Route />
          </BrowserRouter>
          {/* <App config={config} /> */}
        </ThemeProvider>
      </PersistProvider>
    </ReduxProvider>
  );
};

export default app;
