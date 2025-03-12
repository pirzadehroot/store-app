"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userRegister = () => {
    // handleSubmit()
    alert("your are sing@");
  };
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

      <form className="grid gap-5" onSubmit={handleSubmit(userRegister)}>
        <input
          {...register("email", { required: "ایمیل الزامی است" })}
          className="outline-none border rounded-lg p-2 bg-bg border-border"
          type="email"
          placeholder="ایمیل"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message as string}{" "}
          </span>
        )}
        <input
          {...register("password", {
            required: "رمز عبور الزامی است",
            minLength: {
              value: 8,
              message: "رمز عبور نمی‌تواند کمتر از 8 کاراکتر باشد",
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
          حساب کاربری ندارید؟{" "}
          <Link
            href="/register"
            className="text-blue-600 dark:text-blue-500 hover:underline"
            aria-label="ثبت نام کنید"
          >
            ثبت نام کنید.
          </Link>
        </span>
      </form>
    </>
  );
}
