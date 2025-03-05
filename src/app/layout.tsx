import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "فروشگاه آنلاین",
  description: "فروشگاه base",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark scroll-smooth">
      <body className="font-Vazir bg-bg text-base">
        <NextTopLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
