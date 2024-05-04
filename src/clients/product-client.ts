import axios from "axios";
import { Filter, Product } from ".";
import { Meta } from "./types/meta";

interface GetProductsResponse {
  items: Product[];
  meta: Meta;
  filters: Filter[];
}

export const ProductClient = {
  getProducts: (searchParams: URLSearchParams) =>
    axios.get<GetProductsResponse>(`/api?${searchParams.toString()}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
