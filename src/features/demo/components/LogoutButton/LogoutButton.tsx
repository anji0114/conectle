'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button/Button';

export const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/login');
  }, [supabase, router]);

  return (
    <Button buttonSize='sm' buttonType='plain' onClick={signOut}>
      ログアウト
    </Button>
  );
};
