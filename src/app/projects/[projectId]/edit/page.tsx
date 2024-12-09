import { notFound, redirect } from 'next/navigation';
import { ProjectEdit } from '@/app/projects/[projectId]/edit/_components/ProjectEdit';
import { createSupabaseServer } from '@/utils/supabase/server';

type Params = {
  projectId: string;
};

const ProjectEditPage = async ({ params }: { params: Params }) => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const { data: project, error: projectError } = await supabase
    .from('projects')
    .select('*')
    .eq('id', params.projectId)
    .single();

  if (error || !user || projectError) return redirect('/error');
  if (!project || project.user_id !== user.id) return notFound();

  return (
    <div className='min-h-[calc(100vh_-_65px)] bg-slate-50 py-10'>
      <ProjectEdit project={project} />
    </div>
  );
};

export default ProjectEditPage;
