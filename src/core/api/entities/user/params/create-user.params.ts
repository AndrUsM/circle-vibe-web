import type { UserRole, UserType } from "@/core/api/enums/user";

export interface CreateUserParams {
  name: string;
  username: string;
  password: string;
  avatarUrl: string;
  birthDate: string;
  privacySettings: CreateUserPrivacySettingsParams;
  location: CreateUserLocationParams;
  contacts: CreateUserContactsParams;
  userType: UserType;
  userRole: UserRole;
}

export interface CreateUserPrivacySettingsParams {
  isHiddenContactInfo: boolean;
  isAllowedToSearch: boolean;
}

export interface CreateUserLocationParams {
  countryCode: string;
  city: string;
}

export interface CreateUserContactsParams {
  email: string;
  phone: string;
}