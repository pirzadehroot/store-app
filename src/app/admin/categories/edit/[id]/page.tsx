'use client';
import {
  useGetCategories,
  useGetOneCategory,
  useUpdateCategory,
} from '../../../../../hooks/admin/category/useCategoryHooks';
import { CategoryDto } from '../../../../../Dto/category.dto';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ErrorMessage from '../../../components/ErrorMessage';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditCategory() {
  const { id } = useParams()
  const { data: editCategory } = useGetOneCategory(id as string);
  const { mutate } = useUpdateCategory();
  const { data: allCategories } = useGetCategories();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryDto>();

  useEffect(() => {
    if (editCategory) {
      reset({
        title: editCategory.title,
        slug: editCategory.slug,
        parentCategoryId: editCategory.parentCategoryId || '',
      });
    }
  }, [editCategory, reset]);

  const onSubmit = (data: CategoryDto) => {
    if (!editCategory?.id) return;
    const category = { ...data, id: id as string }
    mutate(
      category,
      {
        onSuccess: () => {
          toast.success('دسته بندی ویرایش شد.');
          router.push('/admin/categories');
        },
      }
    );
  };

  if (!editCategory) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-6 items-center">
        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.title && (
            <ErrorMessage message={errors.title.message as string} />
          )}
          <input
            {...register('title', { required: 'نام دسته بندی الزامی است' })}
            placeholder="نام دسته بندی"
            type="text"
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          />
        </label>

        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.slug && (
            <ErrorMessage message={errors.slug.message as string} />
          )}
          <input
            {...register('slug', {
              required: 'اسلاگ دسته بندی الزامی است',
              pattern: {
                value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  'اسلاگ باید به صورت kebab-case باشد (مثال: my-category)',
              },
            })}
            placeholder="اسلاگ دسته بندی"
            type="text"
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          />
        </label>
      </div>

      <select
        {...register('parentCategoryId')}
        className="flex my-2 outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
      >
        <option value={''}>دسته‌بندی پدر</option>
        {allCategories?.map((categoryItem) => (
          <option key={categoryItem.id} value={categoryItem.id}>
            {categoryItem.title}
          </option>
        ))}
      </select>

      <button
        className="bg-yellow-500 rounded-lg active:scale-95 p-2 mt-4 text-white"
        type="submit"
      >
        ویرایش
      </button>
    </form>
  );
}