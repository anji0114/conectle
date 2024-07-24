'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { TAuthForm } from '../config/authSchema';

export const register = async (value: TAuthForm) => {
  const supabase = createClient();

  const data = {
    email: value.email,
    password: value.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error.message);
    if (
      error.message.includes('already') &&
      error.message.includes('registered')
    ) {
      throw new Error('このメールアドレスは既に登録済みです');
    }

    throw new Error('メールまたはパスワードに誤りがあります');
  }

  revalidatePath('/', 'layout');
  redirect('/');
};
