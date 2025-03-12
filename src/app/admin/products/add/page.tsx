"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AdminProductDto } from "../dto/adminProduct.dto";

export default function AdminProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminProductDto>();

  return (
    <form
      onSubmit={handleSubmit(() => {
        reset();
      })}
      className="grid grid-cols-1 items-center"
    >
      {errors.title && (
        <span className="text-sm mt-5 text-red-500">
          {errors.title?.message}
        </span>
      )}
      <div className="grid grid-cols-3 gap-10 items-center">
        <label className="contents">
          <input
            {...register("title", { required: "نام محصول الزامی است" })}
            placeholder="نام محصول"
            type="text"
            className="bg-slate-50 outline-none  border-2 rounded-lg shadow-lg p-2 text-gray-700"
          />
        </label>
        <input
          {...register("price")}
          placeholder="قیمت محصول"
          type="number"
          value={0}
          className="bg-slate-50 outline-none border-2 rounded-lg shadow-lg p-2 text-gray-700"
        />
        <label className="bg-slate-50 outline-none border-2 rounded-lg shadow-lg p-2 text-gray-700">
          {errors.image ? (
            <span className="text-sm mt-5 text-red-500">
              {errors.image?.message}
            </span>
          ) : (
            <span className="text-gray-400">بار گذاری عکس محصول</span>
          )}
          <input
            {...register("image", { required: "عکس الزامی است" })}
            type="file"
            className="outline-none  hidden "
          />
        </label>
      </div>
      <label className="contents">
        {errors.description && (
          <span className="text-sm mt-5 text-red-500">
            {errors.description?.message}
          </span>
        )}
        <textarea
          {...register("description", { required: "توضیحات الزامی است" })}
          rows={5}
          placeholder="توضیحات کلی محصول"
          className="bg-slate-50 outline-none border-2 mt-2 rounded-lg shadow-lg p-2 text-gray-700"
        ></textarea>
      </label>
      <button
        className="mx-auto mr-0 mt-5 bg-green-500 rounded-lg shadow-xl px-3 py-2 text-white"
        type="submit"
      >
        اضافه کردن
      </button>
    </form>
  );
}
