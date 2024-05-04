import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { ProductClient } from "../../clients";
import { ProductList } from "../product-list";

const SPORTS_NUTRITION_CATEGORY_NUMBER = 2416;

export function SportsNutritionPage() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["sports-nutrition"],
    queryFn: () => ProductClient.getProducts(SPORTS_NUTRITION_CATEGORY_NUMBER),
    retry: 2,
  });

  return (
    <>
      <div className="container mx-auto my-2">
        <Typography variant="h3">Sports Nutrition</Typography>

        {/* // TODO skeleton while loading */}
        {!isPending && !isError && <ProductList products={data.data.items} />}
      </div>
    </>
  );
}
