import { string, z } from "zod";

export const ChatSecurity = z.object({
  encryptionSecret: string(),
})