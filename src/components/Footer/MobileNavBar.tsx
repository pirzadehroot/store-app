import Link from 'next/link';
import { BiHomeAlt2 } from 'react-icons/bi';
import { LuShoppingCart } from 'react-icons/lu';
import { TbCategory } from 'react-icons/tb';
import { AiOutlineUser } from 'react-icons/ai';

export default function MobileNavBar() {
  const links = [
    {
      href: '/',
      icon: <BiHomeAlt2 size={30} />,
    },
    {
      href: '/',
      icon: <TbCategory size={30} />,
    },
    {
      href: '/',
      icon: (
        <>
          <LuShoppingCart size={30} />
          <span className="absolute ext-white -bottom-1 -right-2.5 bg-red-500 text-sm px-1.5 text-white rounded-md border ">
            1
          </span>
        </>
      ),
    },
    {
      href: '/',
      icon: <AiOutlineUser size={30} />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg_low shadow-lg max-lg:visible lg:hidden">
      <div className="border-t-2 border-border py-3 flex justify-around items-center">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="relative">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
