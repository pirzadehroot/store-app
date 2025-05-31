import Logo from '../../components/Header/MainHeader/Logo';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <div className="border border-border rounded-lg bg-bg_low shadow-lg p-5 w-1/3 max-lg:w-1/2 max-sm:w-full max-sm:p-4 mx-auto my-24 max-sm:my-8">
        {children}
      </div>
    </div>
  );
}
