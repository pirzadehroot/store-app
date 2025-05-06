'use client';
import DataLoading from '../components/Loading';
import CategoryItemVertical from '../components/category/CategoryItem';
import { useGetCategories } from '@/hooks/admin/category/useCategoryHooks';
import { TbAlertSquare } from 'react-icons/tb';
import { AddNewCategory } from '../components/category/AddCategory';

export default function Categories() {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <div className="space-y-5">
      <AddNewCategory categories={categories} />
      <div>
        {isLoading ? (
          <DataLoading />
        ) : (
          <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories?.map(
              (category) =>
                category.parentCategory === null && (
                  <CategoryItemVertical key={category.id} {...category} />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
