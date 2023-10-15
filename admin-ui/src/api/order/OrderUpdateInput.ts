import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateManyWithoutOrdersInput } from "./OrderUpdateManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutOrdersInput;
  paymentIntent?: string | null;
  paymentstatus?: boolean | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  status?: InputJsonValue;
};
