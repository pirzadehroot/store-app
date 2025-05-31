'use client';
import { useEffect } from 'react';
import { useActive } from '@/hooks/auth/useAuthHooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ActiveAccount() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token');
  console.log(token);
  const { mutate } = useActive();

  useEffect(() => {
    if (token) {
      mutate(token, {
        onSuccess: () => {
          toast.success('حساب شما فعال شد.');
          router.push('/login');
        },
      });
    }
  }, [token, mutate, router]);

  return (
    <div>
      <h3 className="text-center text-3xl gap-5">در حال انتقال به سایت ...</h3>
    </div>
  );
}
