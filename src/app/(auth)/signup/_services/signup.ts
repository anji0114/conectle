'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { type SignupForm } from '@/app/(auth)/signup/_constants/signupForm';
import { createClient } from '@/utils/supabase/server';

export const signup = async (value: SignupForm) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: value.email,
    password: value.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/', 'layout');
  redirect('/check-login');
};
