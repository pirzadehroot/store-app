"use client";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import {
  RiHeadphoneLine,
  RiTelegram2Line,
  RiTwitterXFill,
} from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { useEffect } from "react";

export default function ContactMap() {
  useEffect(() => {
    const map = new nmp_mapboxgl.Map({
      mapType: nmp_mapboxgl.Map.mapTypes.neshanRaster,
      container: "map",
      zoom: 11,
      pitch: 0,
      center: [51.389, 35.6892],
      minZoom: 2,
      maxZoom: 21,
      trackResize: true,
      mapKey: "web.ae5f9aa20aac4f64845ed2667787e1a9",
      poi: false,
      traffic: false,
    });

    return () => map.remove();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid -mt-16 grid-cols-12 gap-5 p-5 bg-white dark:bg-slate-800 rounded-lg border border-gray-300 shadow-md dark:border-gray-750">
        <div className="col-span-4">
          <ul className="snap-y-2 text-sm">
            <li className="items-center flex justify-between border-b border-gray-200 dark:border-gray-500 py-3">
              <span
                className="items-center flex justify-between gap-1 text-gray-600 dark:text-gray-400
"
              >
                <LuMapPin size={22} className={"text-red-500"} />
                دفتر مرکزی
              </span>
              <span className="items-center flex justify-between text-gray-700 dark:text-gray-300">
                تهران، خیابان طراحان سایت،کوچه سوم
              </span>
            </li>
            <li className="items-center flex justify-between border-b border-gray-200 dark:border-gray-500 py-3">
              <span
                className="items-center flex justify-between gap-1 text-gray-600 dark:text-gray-400
"
              >
                <HiOutlineMail size={22} className={"text-red-500"} />
                ایمیل
              </span>
              <span className="items-center flex justify-between text-gray-700 dark:text-gray-300">
                info@yoursite.com
              </span>
            </li>
            <li className="items-center flex justify-between border-b border-gray-200 dark:border-gray-500 py-3">
              <span
                className="items-center flex justify-between gap-1 text-gray-600 dark:text-gray-400
"
              >
                <LiaPhoneVolumeSolid size={22} className={"text-red-500"} />
                شماره تماس فروش
              </span>
              <span className="items-center flex justify-between text-gray-700 dark:text-gray-300">
                021-222222222
              </span>
            </li>
            <li className="items-center flex justify-between border-b border-gray-200 dark:border-gray-500 py-3">
              <span
                className="items-center flex justify-between gap-1 text-gray-600 dark:text-gray-400
"
              >
                <RiHeadphoneLine size={22} className={"text-red-500"} />
                شماره تماس پشتیبانی
              </span>
              <span className="items-center flex justify-between text-gray-700 dark:text-gray-300">
                021-222222222
              </span>
            </li>
            <li className="items-center flex justify-between border-b border-gray-200 dark:border-gray-500 py-3">
              <span
                className="items-center flex justify-between gap-1 text-gray-600 dark:text-gray-400
"
              >
                <IoTimeOutline size={22} className={"text-red-500"} />
                ساعت پاسخگویی
              </span>
              <span className="items-center flex justify-between text-gray-700 dark:text-gray-300">
                شنبه تا پنجشنبه 24 ساعته
              </span>
            </li>
            <li className="items-center flex justify-around pt-5">
              <FaInstagram
                size={32}
                className="text-gray-600 dark:text-gray-400"
              />
              <RiTelegram2Line
                size={32}
                className="text-gray-600 dark:text-gray-400"
              />
              <RiTwitterXFill
                size={32}
                className="text-gray-600 dark:text-gray-400"
              />
              <FiYoutube
                size={32}
                className="text-gray-600 dark:text-gray-400"
              />
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <div
            id="map"
            style={{ height: "350px", width: "100%", borderRadius: "20px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
