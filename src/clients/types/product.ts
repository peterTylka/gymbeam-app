export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  formatted_price: string;
  product_url: string;
  image: string;
  thumbnail: string;
  small_image: string;
  reviews_count: number;
  rating_summary: number;
  saleable: boolean;
  form_inputs: string;
  form_action: string;
  labels: unknown[];
}
