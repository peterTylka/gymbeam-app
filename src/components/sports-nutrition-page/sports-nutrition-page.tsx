import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ProductClient } from "../../clients";

const SPORTS_NUTRITION_CATEGORY_NUMBER = 2416;

export function SportsNutritionPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["sports-nutrition"],
    queryFn: () => ProductClient.getProducts(SPORTS_NUTRITION_CATEGORY_NUMBER),
    retry: 2,
  });

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" align="left">
          Sports Nutrition
        </Typography>
      </Container>
    </>
  );
}
