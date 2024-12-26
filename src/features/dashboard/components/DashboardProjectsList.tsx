import { DashboardProjectItem } from '@/features/dashboard/components/DashboardProjectItem';
import { createSupabaseServer } from '@/utils/supabase/server';

export const DashboardProjectsList = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('projects')
    .select('*, profiles(username)')
    .eq('user_id', user?.id || '');

  if (!data || error) {
    return (
      <div className='rounded border border-slate-200 p-10 text-center'>
        {error?.message || 'プロジェクトが見つかりません'}
      </div>
    );
  }

  return (
    <div>
      {data.map((project) => (
        <DashboardProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};
