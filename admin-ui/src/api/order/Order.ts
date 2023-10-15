import { Product } from "../product/Product";
import { JsonValue } from "type-fest";

export type Order = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  orders?: Array<Order>;
  paymentIntent: string | null;
  paymentstatus: boolean | null;
  price: number | null;
  product?: Product | null;
  status: JsonValue;
  updatedAt: Date;
};
