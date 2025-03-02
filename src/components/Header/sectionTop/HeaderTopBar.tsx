import CartIcon from "./CartIcon";
import HeaderLogin from "./HeaderLogin";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";

export default function HeaderTopBar() {
  return (
    <section className="relative z-10 max-lg:hidden bg-white dark:bg-gray-925">
      <div className="container mx-auto">
        <div className="flex justify-between h-18">
          <div className="flex items-center justify-between">
            <Logo />
            <SearchBox />
          </div>
          <div className="flex items-center max-lg:hidden">
            <ThemeToggle />
            <span className="border-l mx-3 h-1/3 dark:border-gray-400"></span>
            <HeaderLogin />
            <span className="border-l mx-3 h-1/3 dark:border-gray-400"></span>
            <CartIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
