import { boolean, number, z } from "zod";
import { ChatType } from "../../enums/chat/chat-type";

export const ChatSettings = z.object({
  isGroupChat: boolean(),
  usersLimit: number(),
  chatType: ChatType
});