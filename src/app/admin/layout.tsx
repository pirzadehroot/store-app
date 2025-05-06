import AdminNavBar from './components/AdminNavBar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <AdminNavBar />
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
