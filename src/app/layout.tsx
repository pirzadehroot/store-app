import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/MainLayout";

export const metadata: Metadata = {
  title: "App",
  description: "Base App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className="dark scroll-smooth overflow-y-auto">
      <body className="font-yekan text-right dark:bg-gray-925 bg-white !text-gray-850 dark:!text-gray-100 !duration-300">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
