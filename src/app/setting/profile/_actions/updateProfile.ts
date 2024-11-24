'use server';

import { type ProfileForm } from '@/app/setting/profile/_constants/profileForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { createClient } from '@/utils/supabase/server';

export const updateProfile = async (
  profile: ProfileForm,
  currentUsername: string,
) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return { error: error?.message || ERROR_MESSAGE.DEFAULT };
  }

  const { data: userData, error: userError } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', profile.username)
    .single();

  if (userError) {
    return { error: userError.message };
  }

  if (userData && userData.username !== currentUsername) {
    return { error: '既に使用済みのユーザーネームです' };
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .update({
      name: profile.name,
      introduce: profile.introduce,
      username: profile.username,
    })
    .eq('id', data.user?.id)
    .select('*')
    .single();

  if (profileError) {
    return { error: profileError.message };
  }

  return { data: profileData };
};
