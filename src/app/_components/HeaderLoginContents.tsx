'use client';

import Link from 'next/link';
import { Loading } from '@/components/ui/Loading';
import { useLogout } from '@/hooks/useLogout';
import { useProfile } from '@/hooks/useProfile';

/**
 * @description
 * ログイン後のヘッダーのコンテンツ
 */

export const HeaderLoginContents = () => {
  const { data: profile, isLoading } = useProfile();
  const { logout } = useLogout();

  if (isLoading || !profile) {
    return (
      <div>
        <Loading type='default' />
      </div>
    );
  }

  if (!profile.username) return null;

  return (
    <div className='group relative'>
      <button className='flex size-10 items-center justify-center rounded-full bg-slate-700 leading-none text-white'>
        {profile.username[0].toUpperCase()}
      </button>
      <div className='invisible absolute right-0 top-full w-[200px] rounded border border-slate-50 bg-white py-2 opacity-0 shadow transition-opacity duration-300 group-hover:visible group-hover:opacity-100'>
        <Link
          href='/setting/profile'
          className='block w-full border-t px-4 py-2 text-left text-sm hover:bg-gray-50'
        >
          プロフィール
        </Link>
        <button
          className='block w-full border-y px-4 py-2 text-left text-sm hover:bg-gray-50'
          onClick={() => logout()}
        >
          ログアウト
        </button>
      </div>
    </div>
  );
};
