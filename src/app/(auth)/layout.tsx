import Logo from "../../components/Header/MainHeader/Logo";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <div className="rounded-lg shadow-lg p-5 w-1/3 max-lg:w-1/2 max-sm:w-full max-sm:p-4 text-base mx-auto my-24 max-sm:my-8 dark:border-gray-110 bg-gray-55 dark:bg-gray-850">
        <div className="">
          <div className="flex justify-center mb-5">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
