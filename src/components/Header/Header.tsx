import HeaderDownBar from "./sectionDown/HeaderDownBar";
import MoblieTopNavBar from "./mobile/MoblieTopNavBar";
import HeaderTopBar from "./sectionTop/HeaderTopBar";

export default function Header() {
  return (
    <header className="sticky w-full top-0 left-0 z-20">
      <MoblieTopNavBar />
      <HeaderTopBar />
      <HeaderDownBar />
    </header>
  );
}
