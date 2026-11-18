import type { AccoutStatus, UserChatStatus, UserType } from "../../enums/user";

export interface UserStatusesDto {
  id: number;
  chatStatus: UserChatStatus;
  status: UserType;
  accountStatus: AccoutStatus;
}
