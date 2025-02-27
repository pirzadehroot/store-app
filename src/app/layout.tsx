import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/MainLayout";

export const metadata: Metadata = {
  title: "فروشگاه آنلاین",
  description: "فروشگاه base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark scroll-smooth">
      <body className="font-yekan text-right dark:bg-gray-925 bg-white !text-gray-850 dark:!text-gray-100 !duration-300 ">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
