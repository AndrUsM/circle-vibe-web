import { string, z } from "zod";
import { User } from "./user";

export const AuthResponse = z.object({
  token: string(),
  user: User,
});
