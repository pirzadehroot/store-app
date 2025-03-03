"use client";
import Image from "next/image";
import Contact_from_img from "@/assets/images/Contact/from_image.png";

export default function ContactForm() {
  return (
    <div className="grid grid-cols-12 gap-10 items-center">
      <div className="col-span-9">
        <form className={"grid grid-cols-12 rounded-lg border dark:border-gray-500 p-7 gap-5"}>
          <input
            type="text"
            placeholder="نام"
            className="col-span-6 outline-none bg-transparent border text-gray-700 rounded-lg py-2 px-3 bg-gray-50 dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          />
          <input
            type="number"
            placeholder="شماره تلفن"
            className="col-span-6 outline-none bg-transparent border text-gray-700 rounded-lg py-2 px-3 bg-gray-50 dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          />
          <input
            type="text"
            placeholder="موضوع"
            className="col-span-12 outline-none bg-transparent border text-gray-700 rounded-lg py-2 px-3 bg-gray-50 dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          />
          <textarea
            placeholder="پیام"
            rows={5}
            className="outline-none col-span-12 bg-transparent border text-gray-700 rounded-lg py-2 px-3 bg-gray-50 dark:bg-gray-850 dark:text-gray-100 dark:placeholder:text-gray-300 dark:border-gray-500"
          ></textarea>
          <button className="bg-red-500 rounded-lg text-white py-2 px-3">
            ارسال
          </button>
        </form>
      </div>
      <div className="col-span-3">
        <Image
          src={Contact_from_img}
          alt="image contact"
          width={300}
          height={600}
        />
      </div>
    </div>
  );
}
