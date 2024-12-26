'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/components/functional/ToastProvider';
import { iconButtonStyle, IconButton } from '@/components/ui/IconButton';
import type { Listing } from '@/types/models/listing';
import { createSupabaseClient } from '@/utils/supabase/client';

type Props = {
  listing: Listing;
};

export const DashboardListingItem: FC<Props> = ({ listing }) => {
  const { openToast } = useToast();

  const onDelete = async (id: string) => {
    const confirm = window.confirm('削除しますか？');
    if (!confirm) return;
    try {
      const supabase = createSupabaseClient();
      await supabase.from('listings').delete().eq('id', id);
      openToast({
        children: '削除しました',
      });
    } catch (error) {
      openToast({
        children: '削除に失敗しました',
      });
    }
  };

  return (
    <div
      className='flex items-center gap-6 border-b border-slate-200 py-5 first-of-type:border-t'
      key={listing.id}
    >
      <div className='flex-1'>
        <Link
          href={`/listings/${listing.id}/edit`}
          className='text-lg font-bold text-sky-600'
        >
          {listing.title}
        </Link>
      </div>
      <div className='flex items-center gap-1'>
        <Link
          href={`/listings/${listing.id}/edit`}
          className={iconButtonStyle({ size: 'sm', variant: 'ghost' })}
        >
          <PencilIcon className='size-5' />
        </Link>
        <IconButton size='sm' variant='ghost'>
          <TrashIcon onClick={() => onDelete(listing.id)} />
        </IconButton>
      </div>
    </div>
  );
};
