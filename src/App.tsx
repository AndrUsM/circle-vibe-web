import { createBrowserRouter, Navigate, Outlet } from 'react-router';

import { PUBLIC_ROUTES } from './pages/public/public.routes';
import { ErrorPage } from './pages/public/error';
import { AnimatedOverlay } from './shared/components/animated-overlay/animated-overlay';

import './App.css';
import './shared/styles/index.scss';

const RootLayout = () => {
  return (
    <div className="app-page">
      <AnimatedOverlay />
      <Outlet />
    </div>
  );
};

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/sign-in"  replace />
      },
      {
        path: '*',
        Component: ErrorPage,
      },
      ...PUBLIC_ROUTES
    ],
  },
]);

export default ROOT_ROUTE;
