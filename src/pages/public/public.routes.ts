import { type RouteObject } from 'react-router';

import { SignInPage } from './sign-in';

export const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: '/sign-in',
    Component: SignInPage,
  },
];
