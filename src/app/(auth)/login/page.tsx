'use client';
import { useLogin } from '@/hooks/auth/useAuthHooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { IoLogInOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

export interface UserLoginDto {
  email: string;
  password: string;
}

export default function Login() {
  const { mutate } = useLogin();
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = (data: UserLoginDto) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        router.push('/profile');
        toast.success('خوش آمدید - درحال انتقال به صفحه پروفایل ... ');
      },
      onError: () => {
        reset();
      },
    });
  };

  return (
    <>
      <h2 className="my-7 text-2xl flex gap-2 justify-center">
        <IoLogInOutline size={35} />
        ورود به سایت
      </h2>

      {/* <Link
        href="/login-phone"
        className="inline-block gap-2 my-3 hover:text-blue-500 transition-colors"
        aria-label="ورود با شماره موبایل"
      >
        <span className="flex items-center gap-2">
          <HiMiniDevicePhoneMobile size={22} />
          ورود با شماره مبایل
        </span>
      </Link> */}

      <form className="grid gap-5" onSubmit={handleSubmit(userLogin)}>
        <input
          {...register('email', { required: 'ایمیل الزامی است' })}
          className="outline-none border rounded-lg p-2 bg-bg border-border"
          type="email"
          placeholder="ایمیل"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message as string}{' '}
          </span>
        )}
        <input
          {...register('password', {
            required: 'رمز عبور الزامی است',
            minLength: {
              value: 8,
              message: 'رمز عبور نمی‌تواند کمتر از 8 کاراکتر باشد',
            },
          })}
          className="outline-none border rounded-lg p-2 bg-bg  border-border"
          type="password"
          placeholder="رمز عبور"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message as string}
          </span>
        )}
        <button
          className="bg-red-500 rounded-lg shadow-md py-2 px-3.5 text-white hover:bg-red-600 transition-colors"
          type="submit"
        >
          ورود
        </button>
        <span className="text-gray-700 dark:text-gray-300 text-sm">
          حساب کاربری ندارید؟{' '}
          <Link
            href="/register"
            className="text-blue-600 dark:text-blue-500 hover:underline"
            aria-label="ثبت نام کنید"
          >
            ثبت نام کنید.
          </Link>
        </span>
        <span className="text-gray-700 dark:text-gray-300 text-sm">
          رمز عبورتان را فراموش کرده اید؟{'  '}
          <Link
            href="/reset-password"
            className="text-blue-600 dark:text-blue-500 hover:underline"
            aria-label="فراموشی رمز عبور"
          >
            بازیابی رمز عبور.
          </Link>
        </span>
      </form>
    </>
  );
}
