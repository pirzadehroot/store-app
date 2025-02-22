"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

interface IUserRegister {
  phone: string;
  phone_active: string;
  email: string;
  name: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      phone_active: "",
    },
  });

  const userRegister = (data: IUserRegister) => {
    console.log(data); // داده‌های فرم را چاپ می‌کند
    // منطق ثبت‌نام را اینجا اضافه کنید
  };

  return (
    <>
      <Link
        href="/login-phone"
        className="text-sm flex justify-end items-center gap-2 my-3 dark:text-gray-300 text-gray-600 hover:text-blue-500 transition-colors"
        aria-label="ورود با شماره موبایل"
      >
        ثبت نام با شماره مبایل
        <HiMiniDevicePhoneMobile size={22} />
      </Link>
      <form className="grid space-y-5" onSubmit={handleSubmit(userRegister)}>
        {/* فیلد نام */}
        <input
          {...register("name", {
            required: "نام الزامی است",
            minLength: {
              value: 3,
              message: "نام باید حداقل ۳ کاراکتر باشد",
            },
            maxLength: {
              value: 30,
              message: "نام نمی‌تواند بیشتر از ۳۰ کاراکتر باشد",
            },
          })}
          className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          type="text"
          placeholder="نام"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        {/* فیلد ایمیل */}
        <input
          {...register("email", {
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل معتبر نیست",
            },
          })}
          className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          type="email"
          placeholder="ایمیل"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        {/* فیلد رمز عبور */}
        <input
          {...register("password", {
            required: "رمز عبور الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
            },
          })}
          className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          type="password"
          placeholder="رمز عبور"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <button
          className="bg-red-500 rounded-lg shadow-md py-2 px-3.5 text-white hover:bg-red-600 transition-colors"
          type="submit"
        >
          ایجاد حساب کاربری
        </button>

        {/* لینک ورود */}
        <span className="text-gray-500 dark:text-gray-300 text-sm">
          از قبل حساب کاربری دارید؟{" "}
          <Link
            href="/login"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            وارد حسابتان شوید.
          </Link>
        </span>
      </form>
    </>
  );
}
