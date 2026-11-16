import { z } from 'zod';
import { UserChatStatus, UserType, AccoutStatus } from '../../enums/user';

export const userStatuses = z.object({
  chatStatus: UserChatStatus,
  status: UserType,
  accountStatus: AccoutStatus,
});
