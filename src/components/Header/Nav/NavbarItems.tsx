import NavCategory from "./NavCategory";
import Nav from "./Nav";
import NavContact from "./NavContact";

export default function NavbarItems() {
  return (
    <div className="container mx-auto flex justify-between text-sm text-low">
      <div className="flex items-center gap-8">
        <NavCategory />
        <Nav />
      </div>
      <NavContact />
    </div>
  );
}
