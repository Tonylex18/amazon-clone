import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserCreateNestedManyWithoutReviewsInput } from "./UserCreateNestedManyWithoutReviewsInput";

export type ReviewCreateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  users?: UserCreateNestedManyWithoutReviewsInput;
};
