"use client";
import Image from "next/image";
import Contact_from_img from "@/assets/images/Contact/from_image.png";

export default function ContactForm() {
  return (
    <div className="grid grid-cols-12 gap-10 items-center">
      <div className="col-span-9 max-lg:col-span-12">
        <form className="grid grid-cols-12 rounded-lg border bg-bg_low border-border p-7 gap-4">
          <input
            type="text"
            placeholder="نام"
            className="col-span-6 outline-none border rounded-lg bg-bg py-2 px-3 border-border"
          />
          <input
            type="number"
            placeholder="شماره تلفن"
            className="col-span-6 outline-none border rounded-lg bg-bg py-2 px-3 border-border"
          />
          <input
            type="text"
            placeholder="موضوع"
            className="col-span-12 outline-none border rounded-lg bg-bg py-2 px-3 border-border"
          />
          <textarea
            placeholder="پیام"
            rows={5}
            className="col-span-12 outline-none border rounded-lg bg-bg py-2 px-3 border-border"
          ></textarea>
          <button className="bg-red-500 col-span-2 rounded-lg text-white py-2 px-3">
            ارسال
          </button>
        </form>
      </div>
      <div className="visible col-span-3 max-lg:hidden">
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
