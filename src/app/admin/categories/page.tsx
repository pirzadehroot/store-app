'use client';
import Link from 'next/link';
import CategoryItem from '../components/category/CategoryItem';
import DataLoading from '../components/category/DataLoading';
import { HiMiniPlus } from 'react-icons/hi2';
import { useGetCategories } from '../../../hooks/admin/category/useCategoryHooks';

export default function Categories() {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <div className="space-y-3">
      <div className="flex">
        <Link
          href="/admin/categories/add"
          className="flex items-center bg-green-500 p-2 text-white rounded-lg"
        >
          <HiMiniPlus size="22" />
          افزودن دسته‌بندی
        </Link>
      </div>

      <div>
        {isLoading ? (
          <DataLoading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories?.map((category) => (
              <CategoryItem key={category.id} {...category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
