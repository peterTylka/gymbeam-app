import { Typography } from "@material-tailwind/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ProductClient } from "../../clients";
import { DEFAULT_SEARCH_PARAMS } from "../../constants";
import { getNewSearchParams } from "../../utils";
import { Filters } from "../filters";
import { ProductList } from "../product-list";

export function SportsNutritionPage() {
  const [filters, setFilters] = useState(DEFAULT_SEARCH_PARAMS);
  const {
    isPending,
    isError,
    data: response,
    refetch,
  } = useQuery({
    queryKey: ["filters", filters],
    queryFn: () => ProductClient.getProducts(filters),
    enabled: false,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  const handleFiltersChange = (filtersValues: Record<string, string>) => {
    setFilters(getNewSearchParams(filtersValues));
  };

  return (
    <>
      <div className="container mx-auto my-2">
        <Typography variant="h3">Sports Nutrition</Typography>

        {/* // TODO skeleton while loading */}
        {!isPending && !isError && (
          <Filters
            filters={response?.data.filters ?? []}
            onFiltersChange={handleFiltersChange}
          />
        )}

        {/* // TODO skeleton while loading */}
        {!isPending && !isError && (
          <ProductList products={response.data.items} />
        )}
      </div>
    </>
  );
}
