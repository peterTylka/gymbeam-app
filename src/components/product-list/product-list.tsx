import { Product } from "../../clients";
import { ProductCard } from "../product-card";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
