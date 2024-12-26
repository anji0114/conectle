import Link from 'next/link';
import React from 'react';
import { Tag } from '@/components/ui/Tag';
import { createSupabaseServer } from '@/utils/supabase/server';

export const ProjectsList = async () => {
  const supabase = createSupabaseServer();
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*, profiles(name, username)');

  if (error) {
    console.error('Error fetching projects:', error);
    return <div>Error fetching projects</div>;
  }

  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.id}
          className='border-b border-slate-200 px-4 py-5 first-of-type:border-t'
        >
          <div className='flex flex-wrap gap-1'>
            {project.category.map((category, index) => (
              <Tag size='sm' key={index}>
                # {category}
              </Tag>
            ))}
          </div>
          <p className='mt-1'>
            <Link
              className='text-xl font-bold text-sky-600'
              href={`/${project.profiles?.username}/projects/${project.id}`}
            >
              {project.title}
            </Link>
          </p>
          <p className='mt-1 text-sm text-slate-500'>
            {project.profiles?.name}
          </p>
        </div>
      ))}
    </div>
  );
};
