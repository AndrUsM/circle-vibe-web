import type { ChatMetaDto } from "./chat-meta.dto";
import type { ChatSecurityDto } from "./chat-security.dto";
import type { ChatSettingsDto } from "./chat-settings.dto";

export interface ChatDto {
    id: number,
    avatarUrl: string | null,
    updatedAt: string,
    chatMeta: ChatMetaDto,
    chatSettings: ChatSettingsDto,
    chatSecurity: ChatSecurityDto
}
