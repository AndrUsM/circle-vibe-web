import { string } from "zod";
import { DateTime } from "../../../types";

export const LocalDateTime = string().transform(value => new DateTime(value));
