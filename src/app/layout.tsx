import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
        {/* <Header /> */}
        <main className={"my-7"}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
