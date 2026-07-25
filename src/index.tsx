import React from 'react';
import ReactDOM from 'react-dom/client';

import ROOT_ROUTE from './App';
import { RouterProvider } from 'react-router';

const rootDomElement = document.getElementById('root');

if (rootDomElement) {
  const root = ReactDOM.createRoot(rootDomElement);

  root.render(
    <React.StrictMode>
      <RouterProvider router={ROOT_ROUTE}>
      </RouterProvider>
    </React.StrictMode>,
  );
}
