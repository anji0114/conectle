'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { createClient } from '@supabase/supabase-js';

export const deleteUser = async () => {
  // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!);

  // const { error } = await supabase.auth.admin.deleteUser(id);

  // if (error) {
  //   throw new Error('削除に失敗しました。');
  // }

  revalidatePath('/register', 'layout');
  redirect('/register');
};
