import { Option, Select } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Filter } from "../../clients";

interface FiltersProps {
  filters: Filter[];
  onFiltersChange: (data: Record<string, string>) => void;
}

export function Filters({ filters, onFiltersChange }: FiltersProps) {
  const { register, getValues, setValue } = useForm();

  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filters
          ?.filter((filter) => filter.type !== "range")
          .map((filter) => {
            const fieldName = filter.code;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { onChange, ...restFieldProps } = register(fieldName);

            return (
              <Select
                key={fieldName}
                variant="outlined"
                label={filter?.name}
                {...restFieldProps}
                onChange={(value) => {
                  setValue(fieldName, value);
                  onFiltersChange(getValues());
                }}
              >
                {filter?.options?.map((option) => (
                  <Option key={option.value} value={option?.value}>
                    {option?.name}
                  </Option>
                ))}
              </Select>
            );
          })}
      </div>
    </form>
  );
}
