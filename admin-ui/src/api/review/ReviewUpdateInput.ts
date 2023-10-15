import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserUpdateManyWithoutReviewsInput } from "./UserUpdateManyWithoutReviewsInput";

export type ReviewUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  users?: UserUpdateManyWithoutReviewsInput;
};
