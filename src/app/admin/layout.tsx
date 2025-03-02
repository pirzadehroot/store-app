import AdminNavBar from "./components/AdminNavBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <AdminNavBar />
        </div>
        <div className="col-span-9">
          <div className="bg-white shadow-xl rounded-md border-2 p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
