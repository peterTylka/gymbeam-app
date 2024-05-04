import { Grid } from "@mui/material";
import { Product } from "../../clients";
import { ProductCard } from "../product-card";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={4}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
