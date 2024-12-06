'use client';

import Link from 'next/link';
import { Dropdown } from '@/components/ui/Dropdown';
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
      <Dropdown
        trigger={
          <button className='flex size-10 items-center justify-center rounded-full bg-slate-700 leading-none text-white'>
            {profile.username[0].toUpperCase()}
          </button>
        }
        align='center'
        side='bottom'
        sideOffset={4}
        collisionPadding={16}
        className='w-[200px] py-2'
      >
        <Link
          href='/dashboard'
          className='block w-full border-t px-4 py-2 text-left text-sm hover:bg-gray-50'
        >
          ダッシュボード
        </Link>
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
      </Dropdown>
    </div>
  );
};
