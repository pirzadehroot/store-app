'use client';
import { useForm, Controller } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { CategoryDto } from '../../../../Dto/category.dto';
import { useCreateCategory } from '../../../../hooks/admin/category/useCategoryHooks';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function AddNewCategory() {
  const { mutate } = useCreateCategory();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryDto>();

  const onSubmit = (data: CategoryDto) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        toast.success('دسته بندی اضافه شد.');
        router.push('/admin/categories');
      },
      onError: () => {
        toast.error('مشکلی به وجود آمد');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-6 items-center">
        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.title && <ErrorMessage message={errors.title.message} />}
          <input
            {...register('title', { required: 'نام دسته بندی الزامی است' })}
            placeholder="نام دسته بندی"
            type="text"
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          />
        </label>

        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.slug && <ErrorMessage message={errors.slug.message} />}
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

        <label className="grid col-span-6 max-md:col-span-12 gap-1">
          {errors.childrenCategory && (
            <ErrorMessage message={errors.childrenCategory?.message} />
          )}
          <select
            {...register('childrenCategory')}
            className="outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
          >
            <option value="">دسته بندی پدر</option>
            <option value="1">دسته‌بندی ۱</option>
            <option value="2">دسته‌بندی ۲</option>
          </select>
        </label>
      </div>
      <button
        className="bg-green-500 rounded-lg active:scale-95 p-2 mt-4 text-white hover:bg-green-600"
        type="submit"
      >
        افزودن
      </button>
    </form>
  );
}

const ErrorMessage = ({ message }: { message: string }) => (
  <span className="text-sm flex gap-2 text-red-500">
    <MdError size={20} />
    {message}
  </span>
);
