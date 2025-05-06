'use client';
import {
  useGetCategories,
  useGetOneCategory,
  useUpdateCategory,
} from '../../../../hooks/admin/category/useCategoryHooks';
import { CategoryDto } from '../../../../Dto/category.dto';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import { BiMessageSquareEdit } from 'react-icons/bi';

export default function EditCategory() {
  const { id } = useParams();
  const { data: editCategory } = useGetOneCategory(id as string);
  const { mutate, isPending: isUpdating } = useUpdateCategory(id as string);
  const { data: allCategories } = useGetCategories();
  const router = useRouter();

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
    mutate(data, {
      onSuccess: () => {
        router.push('/admin/categories');
      },
      onError: (error) => {
        toast.error('خطایی در ویرایش دسته‌بندی رخ داد.');
      },
    });
  };

  if (!editCategory || !allCategories) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl pb-5 flex gap-3 items-center ">
        <BiMessageSquareEdit size={40} />
        ویرایش دسته بندی
      </h2>
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
        <option value={''}>بدون دسته‌بندی پدر</option>
        {editCategory.parentCategory && (
          <option value={editCategory.id}>
            {editCategory.parentCategory?.title}
          </option>
        )}
        {allCategories
          .filter((categoryItem) => categoryItem.id !== editCategory.id)
          .map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.title}
            </option>
          ))}
      </select>

      <button
        disabled={isUpdating}
        className="bg-yellow-500 dark:bg-yellow-700 dark:border-yellow-500 border-border border-2 rounded-lg active:scale-95 p-2 mt-4 text-white disabled:opacity-50"
        type="submit"
      >
        {isUpdating ? 'در حال ویرایش...' : 'ویرایش'}
      </button>
    </form>
  );
}
