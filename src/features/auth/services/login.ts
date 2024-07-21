'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { TAuthForm } from '../config/authSchema';

export const login = async (value: TAuthForm) => {
  const supabase = createClient();

  const data = {
    email: value.email,
    password: value.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error('メールまたはパスワードに誤りがあります');
  }

  revalidatePath('/projects', 'layout');
  redirect('/projects');
};
