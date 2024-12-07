import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { IconButton, iconButtonStyle } from '@/components/ui/IconButton';
import { Tag } from '@/components/ui/Tag';
import { createSupabaseServer } from '@/utils/supabase/server';

export const Projects = async () => {
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
        <div
          className='flex items-center gap-6 border-b border-slate-200 py-5 first-of-type:border-t'
          key={project.id}
        >
          <div className='flex-1'>
            <Link
              href={`/projects/${project.id}/edit`}
              className='text-lg font-bold text-sky-600'
            >
              {project.title}
            </Link>
            <div className='mt-1 flex items-center gap-1'>
              {project.category.map((category, index) => (
                <Tag size='sm' key={index}>
                  # {category}
                </Tag>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <Link
              href={`/projects/${project.id}/edit`}
              className={iconButtonStyle({ size: 'sm', variant: 'ghost' })}
            >
              <PencilIcon className='size-5' />
            </Link>
            <IconButton size='sm' variant='ghost'>
              <TrashIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};
