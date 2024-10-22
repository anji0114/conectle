'use server';

import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteUser = async (id: string) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!,
  );

  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error('削除に失敗しました。');
  }

  revalidatePath('/register', 'layout');
  redirect('/register');
};
