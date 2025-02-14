import Link from "next/link";
import React from "react";

export default function AdminNavBar() {
  return (
    <div className="bg-white shadow-xl rounded-md border-2 p-5">
      <ul className="space-y-10">
        <li>
          <Link
            className="bg-blue-500 rounded-md shadow-lg p-2 text-white"
            href={"/admin"}
          >
            داشبورد
          </Link>
        </li>
        <li>
          <Link
            className="bg-blue-500 rounded-md shadow-lg p-2 text-white"
            href={"/admin/product"}
          >
            مدریت محصولات
          </Link>
        </li>
        <li>
          <Link
            className="bg-blue-500 rounded-md shadow-lg p-2 text-white"
            href={"/admin/user"}
          >
            مدیریت کاربران
          </Link>
        </li>
      </ul>
    </div>
  );
}
