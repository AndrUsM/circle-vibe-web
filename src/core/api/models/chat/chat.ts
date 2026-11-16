import { number, string, z } from "zod";
import { ChatMeta } from "./chat-meta";
import { ChatSettings } from "./chat-settings";
import { ChatSecurity } from "./chat-security";
import { LocalDateTime } from "../shared/local-date-time";

export const Chat = z.object({
  id: number(),
  avatarUrl: string().nullable(),
  updatedAt: LocalDateTime,
  chatMeta: ChatMeta,
  chatSettings: ChatSettings,
  chatSecurity: ChatSecurity
});
