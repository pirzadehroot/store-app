import Container from "../Container";
import FooterAboutShop from "./FooterAboutShop";
import FooterBox from "./FooterBox";
import FooterDescription from "./FooterDescription";
import FooterMeno from "./FooterMeno";
import FooterPermission from "./FooterPermission";
import FooterNavBar from "./mobile/FooterNavBar";
import ToTop from "./ToTop";

export default function Footer() {
  return (
    <footer className="bg-gray-55 dark:bg-gray-925 dark:text-gray-100 border-t dark:border-gray-750 !duration-300">
      <div className="mb-16">
        <Container>
          <ToTop />
          <FooterMeno />
          <FooterBox />
          <div className="grid grid-cols-2 my-7 max-sm:grid-cols-1 max-sm:gap-3">
            <FooterAboutShop />
            <FooterPermission />
          </div>
          <FooterDescription />
        </Container>
      </div>
      <div className={"max-lg:visible lg:hidden z-50"}>
        <FooterNavBar />
      </div>
    </footer>
  );
}
