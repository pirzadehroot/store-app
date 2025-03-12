import React from 'react';
import MobileMenu from './MobileMenu';
import Logo from '../MainHeader/Logo';
import NavContact from '../Nav/NavContact';

export default function MoblieHeader() {
  return (
    <section className="sticky max-lg:visible lg:hidden shadow-md bg-bg_low">
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-low">
          <MobileMenu />
          <Logo />
          <NavContact />
        </div>
      </div>
    </section>
  );
}
