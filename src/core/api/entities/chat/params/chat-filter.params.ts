import type { ChatType } from "@/core/api/enums/chat";

export interface ChatFilterParams {
  name: string;
  description: string;
  isGroupChat: boolean;
  chatType: ChatType;
}
