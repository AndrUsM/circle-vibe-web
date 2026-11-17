import type { ChatType } from "../../enums/chat";

export interface ChatSettingsDto {
  isGroupChat: boolean;
  usersLimit: number;
  chatType: ChatType;
}
