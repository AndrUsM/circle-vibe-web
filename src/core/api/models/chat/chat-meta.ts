import { boolean, string, z } from "zod";

export const ChatMeta = z.object({
  isActive: boolean(),
  isRemoved: boolean(),
  blockReason: string().nullable(),
  name: string(),
  description: string()
})