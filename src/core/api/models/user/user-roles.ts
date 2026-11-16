import { z } from "zod";
import { UserRole } from "../../enums/user";

export const userRoles = z.object({
  role: UserRole,
});
