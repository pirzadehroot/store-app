import ProfileNavBar from './components/ProfileNavBar';
import ProfileTopBar from './components/ProfileTopBar';

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
          <ProfileTopBar />
          {children}
        </div>
      </div>
    </div>
  );
}
