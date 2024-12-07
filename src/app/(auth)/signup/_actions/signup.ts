'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type SignupForm } from '@/app/(auth)/signup/_constants/signupForm';
import { rootUrl } from '@/constants/url';
import { createSupabaseServer } from '@/utils/supabase/server';

export const signup = async (value: SignupForm) => {
  const supabase = createSupabaseServer();

  const { error } = await supabase.auth.signUp({
    email: value.email,
    password: value.password,
    options: {
      emailRedirectTo: `${rootUrl}/login?signup=true`,
    },
  });

  if (error) {
    if (error.code === 'user_already_exists') {
      return { error: '既に使用済みのメールアドレスです' };
    }
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/signup/welcome');
};
