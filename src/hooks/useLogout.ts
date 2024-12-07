import { useCallback } from 'react';
import { createSupabaseClient } from '@/utils/supabase/client';

export const useLogout = () => {
  const supabase = createSupabaseClient();

  const logout = useCallback(
    async (url?: string) => {
      await supabase.auth.signOut();
      window.location.href = url || '/login';
    },
    [supabase],
  );

  return { logout };
};
