import { Card, CardBody, Rating, Typography } from "@material-tailwind/react";
import { Product } from "../../clients";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardBody className="h-full flex flex-col">
        <img
          src={product.thumbnail}
          className="h-[250px] object-fill mx-auto"
        />
        <Typography
          as="div"
          variant="h6"
          // className="h-8 text-ellipsis overflow-hidden line-clamp-2"
          // TODO: fix elipses on 1+lines
          className="line-clamp-2 flex-grow"
        >
          {product.name}
        </Typography>
        <Rating
          readonly
          value={Math.round(product.rating_summary / 20) || 0}
          className="my-1"
        />
        <Typography as="div" variant="h6">{`€${product.price.toFixed(
          2
        )}`}</Typography>
      </CardBody>
    </Card>
  );
}
