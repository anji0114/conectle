'use server';

import type { InitProfileForm } from '@/app/(auth)/signup/init/constants/initProfileForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { createSupabaseServer } from '@/utils/supabase/server';

export const initProfile = async (formData: InitProfileForm) => {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return { error: error?.message || ERROR_MESSAGE.DEFAULT };
  }

  const { data: userData, error: userError } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', formData.username)
    .single();

  if (userError && userError.code !== 'PGRST116') {
    return { error: userError.message };
  }

  if (userData) {
    return { error: '既に使用済みのユーザーネームです' };
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .update({
      name: formData.name,
      username: formData.username,
    })
    .eq('id', data.user.id)
    .select('*')
    .single();

  if (profileError) {
    return { error: profileError.message };
  }

  return { data: profileData };
};
