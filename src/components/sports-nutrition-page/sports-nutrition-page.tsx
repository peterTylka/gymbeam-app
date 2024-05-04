import { Spinner, Typography } from "@material-tailwind/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Filter, ProductClient } from "../../clients";
import { DEFAULT_SEARCH_PARAMS } from "../../constants";
import { getNewSearchParams } from "../../utils";
import { Filters } from "../filters";
import { ProductList } from "../product-list";

export function SportsNutritionPage() {
  const [filtersDefinitions, setFiltersDefinitions] = useState([] as Filter[]);
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

  useEffect(() => {
    if (filtersDefinitions.length < 1 && response?.data?.filters) {
      setFiltersDefinitions(response.data.filters);
    }
  }, [response]);

  const handleFiltersChange = (filtersValues: Record<string, string>) => {
    setFilters(getNewSearchParams(filtersValues));
  };

  return (
    <>
      <div className="container mx-auto my-2">
        <Typography variant="h3">Sports Nutrition</Typography>

        {isPending && (
          <div className="h-[90vh] flex justify-center items-center">
            <Spinner className="h-16 w-16" />
          </div>
        )}

        {!isPending && !isError && (
          <>
            <Filters
              filters={filtersDefinitions}
              onFiltersChange={handleFiltersChange}
            />
            <ProductList products={response.data.items} />
          </>
        )}
      </div>
    </>
  );
}
