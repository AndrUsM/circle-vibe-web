import { createBrowserRouter, Outlet } from 'react-router';
import { PUBLIC_ROUTES } from './pages/public/public.routes';

import './App.css';
import './shared/styles/index.scss';

const RootLayout = () => {
  return (
    <div className="app-page">
      <Outlet />
    </div>
  );
};

export const ROOT_ROUTE = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [...PUBLIC_ROUTES],
  },
]);

export default ROOT_ROUTE;
