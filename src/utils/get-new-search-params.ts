import { DEFAULT_SEARCH_PARAMS_OBJ } from "../constants";

export function getNewSearchParams(filtersValues: Record<string, string>) {
  const newSearchParamsObj = Object.assign({}, DEFAULT_SEARCH_PARAMS_OBJ);
  Object.entries(filtersValues).reduce(
    (result, [filterPropName, filterPropValue]) => {
      if (filterPropValue != undefined) {
        // @ts-expect-error should be ok
        result[`${filterPropName}[]`] = filterPropValue;
      }
      return result;
    },
    newSearchParamsObj
  );
  return new URLSearchParams(newSearchParamsObj);
}
