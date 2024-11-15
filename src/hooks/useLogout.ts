import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';

export const useLogout = () => {
  const supabase = createClient();
  const router = useRouter();

  const logout = useCallback(
    async (url?: string) => {
      await supabase.auth.signOut();
      router.push(url || '/login');
    },
    [supabase, router],
  );

  return { logout };
};
