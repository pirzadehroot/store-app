import MobileHeader from "./mobile/MobileHeader";
import NavHeader from "./Nav/HeaderNav";
import MainHeader from "./MainHeader/MainHeader";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-20">
      <MobileHeader />
      <MainHeader />
      <NavHeader />
    </header>
  );
}
