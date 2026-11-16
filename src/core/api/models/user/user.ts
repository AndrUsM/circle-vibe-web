import { number, string, z } from "zod";
import { LocalDateTime } from "../shared/local-date-time";

export const User = z.object({
  id: number(),
  name: string(),
  birthDate: LocalDateTime,
});
