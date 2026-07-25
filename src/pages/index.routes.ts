import {
  type RouteConfig,
  index,
} from "@react-router/dev/routes";

import publicRoutes from './public/public.routes';

export const ROUTES = [
  index('./sign-in.tsx'),

  publicRoutes,
] as RouteConfig;

