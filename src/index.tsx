import React from 'react';
import ReactDOM from 'react-dom/client';

import ROOT_ROUTE from './App';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { DEFAULT_THEME } from './shared/theme';

const rootDomElement = document.getElementById('root');

if (rootDomElement) {
  const root = ReactDOM.createRoot(rootDomElement);

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={DEFAULT_THEME}>
      <RouterProvider router={ROOT_ROUTE}>
      </RouterProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
