'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loading } from '@/components/ui/Loading';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { useProfile } from '@/hooks/useProfile';

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data: profile, isLoading, error } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (profile && !profile.username) {
      router.push('/signup/init');
    }
  }, [profile, router]);

  if (error) return <p>{ERROR_MESSAGE.DEFAULT}</p>;

  if (isLoading || !profile || !profile.username) {
    return <Loading type='absolute' />;
  }

  return <>{children}</>;
};
