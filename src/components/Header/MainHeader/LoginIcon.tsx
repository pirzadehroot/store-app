'use client';
import { useAuthStore } from '@/store/useAuthStore';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { LuUser } from 'react-icons/lu';

export default function LoginIcon() {
  const user = useAuthStore((state) => state.user);
  return (
    <div>
      {user ? (
        <Link
          href={user.isAdmin ? '/admin/dashboard' : "/profile"}
          className="flex items-center gap-2 hover:text-hover_low transition-colors"
        >
          <CiUser size={30} />
        </Link>
      ) : (
        <Link
          href={'/login'}
          className="flex items-center gap-2 hover:text-hover_low transition-colors"
        >
          <CiUser size={30} />
          <span>ورود / عضویت </span>
        </Link>
      )}
    </div>
  );
}
