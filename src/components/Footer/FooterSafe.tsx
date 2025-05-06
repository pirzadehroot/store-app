import Link from 'next/link';

export default function FooterSafe() {
  return (
    <footer className="text-sm py-4 border-t border-border flex justify-between max-lg:mb-14 max-lg:flex-col  max-lg:gap-3 items-center">
      <p className="text-gray-400">
        تمامی حقوق برای سایت{' '}
        <Link
          href="/"
          className="text-red-500 font-bold hover:text-blue-500 hover:underline transition-colors duration-200"
        >
          بیس پروژه
        </Link>{' '}
        محفوظ است.
      </p>
      <p className="text-gray-400">
        <span>برنامه‌نویس و طراح سایت </span>
        <Link
          href="https://pir.liara.run/"
          className="text-gray-400 hover:text-blue-500 hover:underline transition-colors duration-200"
          aria-label="وب‌سایت سینا پیرزاده"
        >
          سینا پیرزاده
        </Link>
      </p>
    </footer>
  );
}
