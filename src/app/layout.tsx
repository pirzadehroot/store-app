import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ReactQueryComponentProvider from '../components/ReactQueryComponentProvider';

export const metadata: Metadata = {
  title: 'فروشگاه آنلاین',
  description: 'فروشگاه base',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark scroll-smooth">
      <body className="font-Vazir bg-bg text-base">
          <NextTopLoader color={'#ef4444'} />
          <ReactQueryComponentProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </ReactQueryComponentProvider>
          <ToastContainer />
      </body>
    </html>
  );
}
