'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/utils/supabase/server';

export const getUser = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  if (!user) {
    redirect('/login');
  }

  return user;
};
