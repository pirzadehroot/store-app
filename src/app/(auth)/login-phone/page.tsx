'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { HiOutlineEnvelope } from 'react-icons/hi2';

export default function PhoneLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userRegister = () => {
    // handleSubmit()
  };
  return (
    <>
      <Link
        href="/login"
        className="inline-block gap-2 my-3 hover:text-blue-500 transition-colors"
        aria-label="ورود با شماره موبایل"
      >
        <span className="flex items-center gap-2">
          ورود با ایمیل
          <HiOutlineEnvelope size={22} />
        </span>
      </Link>

      <form className="grid space-y-3" onSubmit={handleSubmit(userRegister)}>
        <input
          {...register('phone', {
            required: 'شماره تلفن الزامی است',
            pattern: {
              value: /^[0-9]{11}$/,
              message: 'شماره تلفن باید ۱۱ رقم باشد',
            },
          })}
          className="outline-none border rounded-lg p-2 bg-bg border-border"
          type="number"
          placeholder="شماره تلفن"
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'textfield',
          }}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">
            {errors.phone.message as string}
          </span>
        )}

        <div className="flex gap-5">
          <input
            {...register('phone_active', {
              required: 'کد فعال‌سازی الزامی است',
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'کد فعال‌سازی باید ۶ رقم باشد',
              },
            })}
            className="outline-none border rounded-lg p-2 bg-bg border-border"
            type="number"
            placeholder="کد فعال‌سازی"
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
          />
          <button
            type="button"
            className="p-2 active:scale-95 bg-green-500 dark:bg-green-800 border-border border-2 dark:border-green-500 text-sm text-white rounded-lg shadow-md"
          >
            ارسال کد
          </button>
        </div>
        {errors.phone_active && (
          <span className="text-red-500 text-sm">
            {errors.phone_active.message as string}
          </span>
        )}
        <button
          className="bg-red-500 rounded-lg shadow-md py-2 px-3.5 text-white hover:bg-red-600 transition-colors"
          type="submit"
        >
          ارسال کد
        </button>
      </form>
    </>
  );
}
