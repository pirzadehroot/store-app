import React from "react";
import Container from "../../Container";
import MobileMenu from "./MobileMenu";
import Logo from "../sectionTop/Logo";
import HeaderContactUs from "../sectionDown/HeaderContactUs";

export default function MoblieTopNavBar() {
  return (
    <section className="sticky max-lg:visible lg:hidden shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16">
          <MobileMenu />
          <Logo />
          <HeaderContactUs />
        </div>
      </Container>
    </section>
  );
}
