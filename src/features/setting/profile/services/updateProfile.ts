'use server';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { type ProfileForm } from '@/features/setting/profile/constants/profileForm';
import { createSupabaseServer } from '@/utils/supabase/server';

export const updateProfile = async (profile: ProfileForm) => {
  const supabase = createSupabaseServer();
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

  if (userData && userData.id !== data.user?.id) {
    return { error: '既に使用済みのユーザーネームです' };
  }

  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .update({
      name: profile.name,
      introduce: profile.introduce,
      username: profile.username,
      links: profile.links.filter((link) => link.url && link.name),
    })
    .eq('id', data.user?.id)
    .select('*')
    .single();

  if (profileError) {
    return { error: profileError.message };
  }

  return { data: profileData };
};
