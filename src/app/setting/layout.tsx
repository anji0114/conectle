import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { LogoutButton } from '@/components/view/LogoutButton';

const SettingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className='flex items-center gap-6 bg-gray-100 p-4'>
        <Link href='/'>トップページ</Link>
        <Link href='/setting/user'>ユーザー設定</Link>
        <div className='ml-auto'>
          <LogoutButton />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingLayout;
