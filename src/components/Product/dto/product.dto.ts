interface FeaturesDto {
  label: string;
  value: string;
}
export interface ProductDetailDto {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  features: FeaturesDto[];
  imageUrl: string;
  discount?: number;
  isDeleted: boolean;
}

export interface ProductDto {
  id: string;
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  discount?: number;
  isDeleted: boolean;
}
