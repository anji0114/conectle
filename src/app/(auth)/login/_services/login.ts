'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type LoginForm } from '@/app/(auth)/login/_constants/loginForm';
import { createClient } from '@/utils/supabase/server';

export const login = async (value: LoginForm) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(value);

  if (error) {
    if (error.message.includes('Invalid')) {
      return { error: 'メールまたはパスワードに誤りがあります' };
    }
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
};
