'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type SignupForm } from '@/app/(auth)/signup/_constants/signupForm';
import { rootUrl } from '@/constants/url';
import { createClient } from '@/utils/supabase/server';

export const signup = async (value: SignupForm) => {
  const supabase = createClient();

  const { data: profileData } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', value.username)
    .single();

  if (profileData) {
    return { error: '既に使用済みのユーザーネームです' };
  }

  const { error } = await supabase.auth.signUp({
    email: value.email,
    password: value.password,
    options: {
      data: {
        username: value.username,
      },
      emailRedirectTo: `${rootUrl}/signup/welcome`,
    },
  });

  if (error) {
    if (
      error.message.includes('already') &&
      error.message.includes('registered')
    ) {
      return { error: '既に使用済みのメールアドレスです' };
    }
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/signup/complete');
};
