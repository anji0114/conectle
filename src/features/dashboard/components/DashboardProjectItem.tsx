'use client';

import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/components/functional/ToastProvider';
import { iconButtonStyle, IconButton } from '@/components/ui/IconButton';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/types/models/project';
import { createSupabaseClient } from '@/utils/supabase/client';

type Props = {
  project: Project;
};

export const DashboardProjectItem: FC<Props> = ({ project }) => {
  const { openToast } = useToast();
  const onDelete = async () => {
    const confirm = window.confirm('削除しますか？');
    if (!confirm) return;
    try {
      const supabase = createSupabaseClient();
      await supabase.from('projects').delete().eq('id', project.id);
      openToast({
        children: '削除しました',
      });
    } catch (error) {
      openToast({
        children: '削除に失敗しました',
        variant: 'error',
      });
    }
  };

  return (
    <div className='flex items-center gap-6 border-b border-slate-200 py-5 first-of-type:border-t'>
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
        <IconButton size='sm' variant='ghost' onClick={onDelete}>
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};
