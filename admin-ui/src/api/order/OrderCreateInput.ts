import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutOrdersInput } from "./OrderCreateNestedManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  order?: OrderWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutOrdersInput;
  paymentIntent?: string | null;
  paymentstatus?: boolean | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  status?: InputJsonValue;
};
