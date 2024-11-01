'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { TRegisterForm } from '@//app/(auth)/constants/authSchema';
import { createClient } from '@/utils/supabase/server';

export const register = async (value: TRegisterForm) => {
  const supabase = createClient();

  const { data: existingUser, error: usernameError } = await supabase
    .from('users')
    .select('id')
    .eq('username', value.username)
    .single();

  if (existingUser) {
    throw new Error('このユーザー名は既に使用されています');
  }

  if (usernameError && usernameError.code !== 'PGRST116') {
    throw new Error('ユーザー名のチェック中にエラーが発生しました');
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email: value.email,
    password: value.password,
  });

  if (error) {
    if (
      error.message.includes('already') &&
      error.message.includes('registered')
    ) {
      throw new Error('このメールアドレスは既に登録済みです');
    }

    throw new Error('メールまたはパスワードに誤りがあります');
  }

  if (user) {
    await supabase
      .from('users')
      .update({ username: value.username })
      .eq('id', user.id);
  }

  revalidatePath('/setting/user', 'layout');
  redirect('/setting/user');
};
