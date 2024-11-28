import { useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';

export const useLogout = () => {
  const supabase = createClient();

  const logout = useCallback(
    async (url?: string) => {
      await supabase.auth.signOut();
      window.location.href = url || '/login';
    },
    [supabase],
  );

  return { logout };
};
