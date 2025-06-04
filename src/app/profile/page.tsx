'use client';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

export default function Profile() {
  const user = useAuthStore((state) => state.user);
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6 bg-bg_low rounded-md p-5">
          {user?.email}fds
        </div>
        <div className="col-span-6 bg-bg_low rounded-md p-5">
          {user?.email}fds
        </div>
      </div>
    </>
  );
}
