import Nav from "./sectionDown/Nav";
import Container from "../Container";
import HeaderCategory from "./sectionDown/HeaderCategory";
import HeaderContactUs from "./sectionDown/HeaderContactUs";
import CartIcon from "./sectionTop/CartIcon";
import SearchBox from "./sectionTop/SearchBox";
import Logo from "./sectionTop/Logo";
import HeaderLogin from "./sectionTop/HeaderLogin";
import ThemeToggle from "./sectionTop/ThemeToggle";
import MobileMenu from "./mobile/MobileMenu";

export default function Header() {
  return (
    <header id={"top"}>
      <section className="sticky  max-lg:visible lg:hidden  shadow-md">
        <Container>
          <div className="flex items-center justify-between h-16">
            <MobileMenu />
            <Logo />
            <HeaderContactUs />
          </div>
        </Container>
      </section>
      <section className={"max-lg:hidden"}>
        <Container>
          <div className="flex justify-between h-20">
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
        </Container>
      </section>
      <section className="bg-gray-55 dark:bg-gray-800 dark:border-gray-750 border-b max-lg:hidden">
        <Container>
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <HeaderCategory />
              <span className="border-l mx-3 h-1/3 dark:border-gray-400"></span>
              <Nav />
            </div>
            <HeaderContactUs />
          </div>
        </Container>
      </section>
    </header>
  );
}
