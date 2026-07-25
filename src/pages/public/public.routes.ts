import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/sign-in", './sign-in.tsx')
] as RouteConfig;