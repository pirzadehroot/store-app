import Link from "next/link";
import { LuHouse } from "react-icons/lu";

interface IRouterType {
  route_link: string;
  route_title: string;
}

export default function PageRouter({ routerList }: IRouterType[]) {
  return (
    <div className={"flex gpa-5 mb-7"}>
      <Link href={"/"}>
        <LuHouse size={20} className="dark:text-gray-110 text-gray-400" />
      </Link>
      {routerList &&
        routerList.map((route, index) => (
          <div className={"items-center"} key={index}>
            <span className="dark:text-gray-110 text-gray-400 text-sm mx-3">
              /
            </span>
            <Link
              className="dark:text-gray-11 font-light text-gray-400 text-sm"
              href={route.route_link}
            >
              {route.route_title}
            </Link>
          </div>
        ))}
    </div>
  );
}
