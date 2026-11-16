import { string, z } from "zod";

export const userLocation = z.object({
  countryCode: string().nullable(),
  city: string().nullable(),
});
