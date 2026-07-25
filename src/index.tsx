import React from 'react';
import ReactDOM from 'react-dom/client';

import ROOT_ROUTE from './App';
import { RouterProvider } from 'react-router-dom';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={ROOT_ROUTE} />
    </React.StrictMode>,
  );
}
