import { Navigate, type RouteObject } from 'react-router';

import { SignInPage } from './sign-in';
import { ErrorPage } from './error';

export const PUBLIC_ROUTES: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/sign-in" replace />,
  },
  {
    path: '*',
    Component: ErrorPage,
  },
  {
    path: '/sign-in',
    Component: SignInPage,
  },
];
