'use server';

import { redirect } from 'next/navigation';
import type { ProjectForm } from '@/types/schema/projectForm';
import { createClient } from '@/utils/supabase/server';

export const createProject = async (formData: ProjectForm) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data, error } = await supabase.from('projects').insert({
    title: formData.title,
    contents: formData.contents,
    category: formData.category,
    status: formData.status,
    user_id: user.id,
  });

  if (error) {
    return { error: error.message };
  }

  return { data };
};
