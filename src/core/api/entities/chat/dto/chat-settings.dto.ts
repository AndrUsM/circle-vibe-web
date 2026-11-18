import type { ChatType } from "@/core/api/enums/chat";

export interface ChatSettingsDto {
  isGroupChat: boolean;
  usersLimit: number;
  chatType: ChatType;
}
