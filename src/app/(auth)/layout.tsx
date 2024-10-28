import { redirect } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';
import { createClient } from '@/utils/supabase/server';

const AuthLayout: FC<PropsWithChildren> = async ({ children }) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect('/');

  return <>{children}</>;
};

export default AuthLayout;
