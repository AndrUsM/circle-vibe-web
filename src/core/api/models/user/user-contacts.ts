import { string, z } from "zod";

export const userContacts = z.object({
  email: string(),
  phone: string().nullable(),
});
