import { createSupabaseServer } from '@/utils/supabase/server';
import React from 'react';

export const ProjectsList = async () => {
  const supabase = createSupabaseServer();

  return <div>Projects</div>;
};
