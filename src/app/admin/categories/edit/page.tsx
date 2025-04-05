'use client';

import { useState } from 'react';
import {
  useUpdateCategory,
  useGetCategories,
} from '../../../../hooks/admin/category/useCategoryHooks';
import { useRouter } from 'next/navigation';
import { CategoryDto } from '../../../../Dto/category.dto';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ErrorMessage from '../../components/ErrorMessage';
import { BiCategory } from 'react-icons/bi';
import Modal from '../../components/modal';
import { useQueryClient } from '@tanstack/react-query';

interface EditCategoryProps {
  category: CategoryDto;
}

export default function EditCategory({ category }: EditCategoryProps) {
  const queryClient = useQueryClient();
  const { mutate } = useUpdateCategory();
  const { data: allCategories } = useGetCategories();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryDto>({
    defaultValues: {
      title: category.title,
      slug: category.slug,
      parentCategoryId: category.parentCategoryId || '',
    },
  });

  const onSubmit = (data: CategoryDto) => {
    mutate(
      { id: category.id, ...data },
      {
        onSuccess: () => {
          toast.success('دسته بندی ویرایش شد.');
          queryClient.invalidateQueries(['categories']);
          router.push('/admin/categories');
        },
      }
    );
  };

  const filteredCategories = allCategories?.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* دکمه باز کردن مودال */}
      <button
        type="button"
        className="px-3 py-2 my-5 border-border border-2 flex text-low bg-bg gap-2 items-center rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiCategory size={30} />
        تغییر دسته‌بندی پدر
      </button>

      {/* مودال انتخاب دسته‌بندی پدر */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <label className="grid col-span-12 gap-1 border-2 border-border bg-bg rounded-lg p-2">
          <input
            type="text"
            placeholder="جستجو در دسته‌بندی پدر..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none bg-bg rounded-lg p-2 focus:border-blue-500"
          />
          {errors.parentCategoryId && (
            <ErrorMessage
              message={errors.parentCategoryId?.message as string}
            />
          )}
          <select
            {...register('parentCategoryId')}
            className="outline-none bg-bg border-0 overflow-y-scroll p-2 focus:border-red-500"
          >
            <option value="">بدون دسته‌بندی پدر</option>
            {filteredCategories?.map((CategoryItem) => (
              <option key={CategoryItem.id} value={CategoryItem.id}>
                {CategoryItem.title}
              </option>
            ))}
          </select>
        </label>
      </Modal>

      {/* دکمه ارسال فرم */}
      <button
        className="bg-blue-500 rounded-lg active:scale-95 p-2 mt-4 text-white hover:bg-blue-600"
        type="submit"
      >
        ویرایش
      </button>
    </form>
  );
}
