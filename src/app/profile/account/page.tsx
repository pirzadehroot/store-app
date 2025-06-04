'use client';
import Image from 'next/image';
import profile_image from '@/assets/images/profile/profile.webp';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';

export default function profileAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="bg-bg_low rounded-md col-span-4 p-5 text-center items-center">
        <Image
          src={profile_image}
          width={200}
          height={200}
          alt="عکس پروفایل کاربر"
        />
        <div>
          <h2>سینا پیرزاده</h2>
          <span>کدملی :‌۱۴۰۵۳۴۳۲۴۳</span>
          <span>عتبار کیف پول :‌۲۰۰۰۰ تومان</span>
        </div>
      </div>

      <div className="bg-bg_low rounded-md p-5 col-span-8 ">
        <form action="">
          <div className="grid grid-cols-12 gap-5">
            <label className="grid col-span-6 max-md:col-span-12 gap-1">
              {errors.name && (
                <ErrorMessage message={errors.name.message as string} />
              )}
              <input
                {...register('name', {
                  required: 'نام نمی تواند خالی باشد.',
                })}
                placeholder="نام"
                type="text"
                className="outline-none bg-bg rounded-md p-2 focus:border-blue-500"
              />
            </label>
            <label className="grid col-span-6 max-md:col-span-12 gap-1">
              {errors.email && (
                <ErrorMessage message={errors.email.message as string} />
              )}
              <input
                {...register('email', {
                  required: 'ایمیل نمی تواند خالی باشد.',
                })}
                placeholder="ایمیل"
                type="text"
                className="outline-none bg-bg rounded-md p-2 focus:border-blue-500"
              />
            </label>
          </div>

          <button
            className="bg-yellow-500 dark:bg-yellow-700 rounded-md active:scale-95 p-2 mt-4 text-white disabled:opacity-50"
            type="submit"
          >
            ویرایش
          </button>
        </form>
      </div>
    </div>
  );
}
