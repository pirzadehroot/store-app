'use client';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import ProflieLayout from './layout';

export default function Profile() {
  const user = useAuthStore((state) => state.user);
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return <ProflieLayout>{user?.email}fds</ProflieLayout>;
}
