import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className={"my-7"}>{children}</main>
      <Footer />
    </div>
  );
}
