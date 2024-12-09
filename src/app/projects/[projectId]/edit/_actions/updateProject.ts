'use server';

import { revalidatePath } from 'next/cache';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import type { ProjectForm } from '@/types/schema/projectForm';
import { createSupabaseServer } from '@/utils/supabase/server';

type Params = ProjectForm & { id: string };

export const updateProject = async (params: Params) => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError) {
    return { error: authError?.message || ERROR_MESSAGE.DEFAULT };
  }

  const { data, error } = await supabase
    .from('projects')
    .update({
      title: params.title,
      category: params.category,
      contents: params.contents,
      status: params.status,
    })
    .eq('id', params.id)
    .select('*');

  if (!data || error) {
    return { error: error.message || ERROR_MESSAGE.DEFAULT };
  }
  revalidatePath('/dashboard/projects');
  return { data: data };
};
