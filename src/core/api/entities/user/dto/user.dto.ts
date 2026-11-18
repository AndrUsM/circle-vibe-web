import type { UserAvatarDto } from "./user-avatar.dto";
import type { UserContactsDto } from "./user-contacts.dto";
import type { UserLocationDto } from "./user-location.dto";
import type { UserPrivacySettingsDto } from "./user-privacy-settings.dto";
import type { UserRolesDto } from "./user-roles.dto";
import type { UserStatusesDto } from "./user-statuses.dto";

export interface UserDto {
  id: number;
  name: string;
  birthDate: string;
  privacySettings: UserPrivacySettingsDto;
  location: UserLocationDto;
  avatar: UserAvatarDto;
  userContacts: UserContactsDto;
  userStatuses: UserStatusesDto;
  userRole: UserRolesDto;
}
