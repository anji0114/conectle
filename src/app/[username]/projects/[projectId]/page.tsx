import React from 'react';
import { ProjectDetailPageTemplate } from '@/features/projects/public/components/ProjectDetailPageTemplate';

// const getProject = async (projectId: string, username: string) => {
//   const supabase = createSupabaseServer();
//   const { data, error } = await supabase
//     .from('projects')
//     .select('*')
//     .eq('id', projectId)
//     .eq('profiles.username', username);
//   return data;
// };

const ProjectDetailPage = () => {
  return <ProjectDetailPageTemplate />;
};

export default ProjectDetailPage;
