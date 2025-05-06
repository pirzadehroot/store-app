export interface CategoryDto {
  id: string;
  title: string;
  slug: string;
  imageUrl?: string;
  isShowing: boolean;
  isDeleted: boolean;
  created_at: string;
  updated_at: string;
  parentCategoryId?: string | undefined;
  parentCategory?: CategoryDto | null;
  subcategories?: CategoryDto[] | [];
}
