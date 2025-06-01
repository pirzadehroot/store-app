import ProfileNavBar from './components/ProfileNavBar';

export default function ProflieLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <ProfileNavBar />
        </div>
        <div className="col-span-9">
          <div className="bg-bg_low rounded-md border border-border p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
