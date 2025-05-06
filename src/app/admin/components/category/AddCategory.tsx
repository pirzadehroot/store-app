import { CategoryDto } from '@/Dto/category.dto';
import { useCreateCategory } from '@/hooks/admin/category/useCategoryHooks';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiMiniPlus } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import Modal from '../modal';
import ErrorMessage from '../ErrorMessage';

interface CategoryPropsDto {
  categories?: CategoryDto[];
}

export const AddNewCategory = ({ categories }: CategoryPropsDto) => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutate } = useCreateCategory();
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
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        setOpenModel(false);
      },
    });
  };

  return (
    <>
      <div className="flex">
        <button
          onClick={() => setOpenModel(true)}
          className="flex items-center active:scale-95 bg-green-500 dark:bg-green-800 border-border border-2 dark:border-green-500 p-2 text-white rounded-lg"
        >
          <HiMiniPlus size="22" />
          دسته بندی جدید
        </button>
      </div>
      <Modal
        title={'افزودن دسته بندی'}
        open={openModel}
        onOpenChange={setOpenModel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-2 items-center">
            <label className="grid col-span-12 gap-1">
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

            <label className="grid col-span-12 gap-1">
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

          <label className="grid col-span-12 gap-1">
            <select
              {...register('parentCategoryId')}
              className="flex my-2 outline-none border-2 border-border bg-bg rounded-lg p-2 focus:border-blue-500"
            >
              <span className="text-sm">دسته بندی پدر را انتخاب کنید.</span>
              <option value={''}>انتخاب کنید</option>
              {categories?.map((categoryItem) => (
                <option key={categoryItem.id} value={categoryItem.id}>
                  {categoryItem.title}
                </option>
              ))}
            </select>
          </label>
          <button
            className="bg-green-500 dark:bg-green-800 border-border border-2 dark:border-green-500 rounded-lg active:scale-95 p-2 mt-4 text-white hover:bg-green-600"
            type="submit"
          >
            افزودن
          </button>
        </form>
      </Modal>
    </>
  );
};
