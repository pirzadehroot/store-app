import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo/logo.svg';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src={logo}
        alt={'لوگو سایت فروشگاه'}
        width={130}
        height={50}
        className="p-3"
      />
    </Link>
  );
}
