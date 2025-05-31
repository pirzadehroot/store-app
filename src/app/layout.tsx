import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ReactQueryProvider from '../components/ReactQueryProvider';
import ThemeScript from '@/components/Header/MainHeader/ThemeScript';

export const metadata: Metadata = {
  title: {
    default: 'فروشگاه آنلاین',
    template: '%s | فروشگاه آنلاین',
  },
  description: 'بهترین تجربه خرید آنلاین',
  keywords: ['فروشگاه', 'خرید آنلاین', 'کالای دیجیتال'],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: '/',
    siteName: 'فروشگاه آنلاین',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-Vazir bg-bg text-base text-text scroll-smooth antialiased">
          <NextTopLoader color="#ef4444" height={3} showSpinner={false} />

          <ReactQueryProvider>
            <Header />

            <main className="min-h-[calc(100vh-160px)]">{children}</main>

            <Footer />
          </ReactQueryProvider>

          <ToastContainer
            rtl
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastClassName="font-sans font-bold bg-bg_low text-text"
          />
      </body>
    </html>
  );
}
