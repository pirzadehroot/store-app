import MoblieHeader from "./mobile/MoblieHeader";
import NavHeader from "./Nav/HeaderNav";
import MainHeader from "./MainHeader/MainHeader";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-20">
      <MoblieHeader />
      <MainHeader />
      <NavHeader />
    </header>
  );
}
