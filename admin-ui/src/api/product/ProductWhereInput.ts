import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: StringFilter;
  discountedPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  variants?: JsonFilter;
};
