import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ReviewWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
  users?: UserListRelationFilter;
};
