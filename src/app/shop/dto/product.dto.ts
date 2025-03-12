interface FeaturesDto {
  label: string;
  value: string;
}
export interface ProductDto {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  features: FeaturesDto[];
  imageUrl: string;
  isDeleted: boolean;
}
