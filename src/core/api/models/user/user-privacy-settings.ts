import { boolean, z } from "zod";

export const userPrivacySettings = z.object({
  isHiddenContactInfo: boolean(),
  isAllowedToSearch: boolean(),
});
