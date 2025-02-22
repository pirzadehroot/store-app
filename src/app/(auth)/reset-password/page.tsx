"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";

interface IPasswrodType {
  re_password: string;
  password: string;
}

export default function Register() {
  const { register, errors, handleSubmit, watch } = useForm<IPasswrodType>({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="grid space-y-5" onSubmit={onSubmit(userRegister)}>
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
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}

      <input
        {...register("re_password", {
          required: "رمز عبور الزامی است",
          minLength: {
            value: 8,
            message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
        className="outline-none bg-transparent border text-gray-500 rounded-lg p-2 bg-white dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
        type="password"
        placeholder="تکرار رمز عبور"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}

      <button
        className="bg-red-500 rounded-lg shadow-md py-2 px-3.5 text-white hover:bg-red-600 transition-colors"
        type="submit"
      >
        تغییر رمز عبور
      </button>
    </form>
  );
}
