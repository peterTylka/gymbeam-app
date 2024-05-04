export interface Filter {
  name: string;
  code: string;
  global_name: string;
  display_mode: string;
  type: string;
  position: string;
  options: FilterOption[];
}

export interface FilterOption {
  name: string;
  slug: string;
  value: string;
  count: number;
}
