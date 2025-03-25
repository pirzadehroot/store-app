export interface CategoryDto {
  id: string;
  title: string;
  slug: string;
  isDeleted: boolean;
  created_at: string;
  updated_at: string;
  childrenCategory?: CategoryDto | null;
}