import axios from "axios";
import { Filter, Product } from ".";
import { Meta } from "./types/meta";

interface GetProductsResponse {
  items: Product[];
  meta: Meta;
  filters: Filter[];
}

export const ProductClient = {
  getProducts: (categoryId: number) =>
    axios.get<GetProductsResponse>(`/api?category_ids[]=${categoryId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
