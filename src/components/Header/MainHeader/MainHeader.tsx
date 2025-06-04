import CartIcon from './CartIcon';
import LoginIcon from './LoginIcon';
import Logo from './Logo';
import Search from './Search';
import Theme from './Theme';

export default function MainHeader() {
  return (
    <section className="relative z-10 max-lg:hidden bg-bg">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center justify-between gap-5">
            <Logo />
            <Search />
          </div>
          <div className="flex items-center max-lg:hidden gap-5 text-low">
            <Theme />
            <LoginIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
