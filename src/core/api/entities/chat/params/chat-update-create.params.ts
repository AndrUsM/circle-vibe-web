import { ChatType } from "@/core/api/enums/chat";

export interface ChatSettingsParams {
  isGroupChat: boolean
	usersLimit: number;
	chatType: ChatType;
}

export interface ChatUpdateCreateParams {
  avatarUrl: string;
  name: string;
  description: string;
  chatSettings: ChatSettingsParams;
}
