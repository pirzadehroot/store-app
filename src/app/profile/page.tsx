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
    <div className="container mx-auto py-10">{user?.email ?? 'Loading...'}</div>
  );
}
