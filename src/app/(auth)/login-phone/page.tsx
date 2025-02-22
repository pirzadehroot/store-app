"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiMiniDevicePhoneMobile, HiOutlineEnvelope } from "react-icons/hi2";

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
        className="text-sm flex justify-end items-center gap-2 my-3 dark:text-gray-300 text-gray-600 hover:text-blue-500 transition-colors"
        aria-label="ورود با شماره موبایل"
      >
        ورود با ایمیل
        <HiOutlineEnvelope size={22} />
      </Link>
      <form className="grid space-y-3" onSubmit={handleSubmit(userRegister)}>
        <input
          {...register("phone", {
            required: "شماره تلفن الزامی است",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "شماره تلفن باید ۱۱ رقم باشد",
            },
          })}
          className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          type="number"
          placeholder="شماره تلفن"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}

        <input
          {...register("phone_active", {
            required: "کد فعال‌سازی الزامی است",
            pattern: {
              value: /^[0-9]{6}$/,
              message: "کد فعال‌سازی باید ۶ رقم باشد",
            },
          })}
          className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          type="number"
          placeholder="کد فعال‌سازی"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
        />
        {errors.phone_active && (
          <span className="text-red-500 text-sm">
            {errors.phone_active.message}
          </span>
        )}
        <button
          className="bg-red-500 rounded-lg shadow-md py-2 px-3.5 text-white hover:bg-red-600 transition-colors"
          type="submit"
        >
          ورود
        </button>
      </form>
    </>
  );
}
