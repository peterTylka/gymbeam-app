import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Product } from "../../clients";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card style={{ height: "320px", paddingTop: "2%" }}>
      <CardMedia
        style={{ height: "200px", paddingTop: "2%" }}
        image={product.thumbnail}
      />
      <CardContent>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" style={{ height: 58 }}>
            {product.name}
          </Typography>
          <Rating
            name="read-only"
            value={product.rating_summary / 20}
            max={5}
            precision={0.1}
            readOnly
          />
          <div>{product.price}</div>
        </div>
      </CardContent>
    </Card>
  );
}
