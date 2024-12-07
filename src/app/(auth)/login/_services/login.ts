'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type LoginForm } from '@/app/(auth)/login/_constants/loginForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { createSupabaseServer } from '@/utils/supabase/server';

export const login = async (value: LoginForm) => {
  const supabase = createSupabaseServer();

  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(value);

  if (error) {
    if (error.message.includes('Invalid')) {
      return { error: 'メールまたはパスワードに誤りがあります' };
    }
    return { error: error.message };
  }

  if (!user) {
    return { error: 'ユーザーが見つかりませんでした。' };
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (profileError || !profile) {
    return { error: profileError?.message || ERROR_MESSAGE.DEFAULT };
  }

  revalidatePath('/', 'layout');

  if (!profile.username) {
    redirect('/signup/init');
  }

  redirect('/dashboard');
};
