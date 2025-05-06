import { CategoryDto } from "@/Dto/category.dto";

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
  category: CategoryDto;
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
  category: CategoryDto;
  discount?: number;
  isDeleted: boolean;
}
