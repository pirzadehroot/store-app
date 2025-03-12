import Link from 'next/link';
import { RiHome2Line } from 'react-icons/ri';

interface RouterDto {
  route_link: string;
  route_title: string;
}

interface PageRouterProps {
  routerList: RouterDto[];
}

export default function PageRouter({ routerList }: PageRouterProps) {
  return (
    <div className="flex pb-5 text-sm items-center text-gray-400">
      <Link href="/">
        <RiHome2Line size={20} />
      </Link>
      {routerList &&
        routerList.map((route, index) => (
          <Link key={index} href={route.route_link}>
            <span className="px-3">/</span>
            {route.route_title}
          </Link>
        ))}
    </div>
  );
}
