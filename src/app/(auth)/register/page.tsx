"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

interface IUserRegister {
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
    },
  });

  const userRegister = (data: IUserRegister) => {};

  return (
    <>
      <Link
        href="/login-phone"
        className="inline-block gap-2 my-3 hover:text-blue-500 transition-colors"
        aria-label="ورود با شماره موبایل"
      >
        <span className="flex items-center gap-2">
          <HiMiniDevicePhoneMobile size={22} />
          ورود با شماره مبایل
        </span>
      </Link>

      <form className="grid space-y-5" onSubmit={handleSubmit(userRegister)}>
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
          className="outline-none border rounded-lg p-2 bg-bg border-border"
          type="text"
          placeholder="نام"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">
            {errors.name.message as string}
          </span>
        )}

        <input
          {...register("email", {
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل معتبر نیست",
            },
          })}
          className="outline-none border rounded-lg p-2 bg-bg border-border"
          type="email"
          placeholder="ایمیل"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message as string}
          </span>
        )}

        <input
          {...register("password", {
            required: "رمز عبور الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
            },
          })}
          className="outline-none border rounded-lg p-2 bg-bg border-border"
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
          ایجاد حساب کاربری
        </button>

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
