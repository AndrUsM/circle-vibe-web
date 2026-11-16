import { string, z } from "zod";

export const userAvatar = z.object({
  url: string().nullable(),
  optimizedUrl: string().nullable(),
});
