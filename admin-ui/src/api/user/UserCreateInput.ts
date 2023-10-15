import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  password: string;
  review?: ReviewWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
