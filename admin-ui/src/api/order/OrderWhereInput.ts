import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderListRelationFilter } from "./OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  orders?: OrderListRelationFilter;
  paymentIntent?: StringNullableFilter;
  paymentstatus?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  status?: JsonFilter;
};
