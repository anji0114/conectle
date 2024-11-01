'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type TLoginForm } from '@/app/(auth)/_constants/authSchema';
import { createClient } from '@/utils/supabase/server';

export const login = async (value: TLoginForm) => {
  const supabase = createClient();

  const data = {
    email: value.email,
    password: value.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error('メールまたはパスワードに誤りがあります');
  }

  revalidatePath('/setting/user', 'layout');
  redirect('/setting/user');
};
