import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  review?: Review | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
