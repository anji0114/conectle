import { LogoutButton } from '@/components/view/LogoutButton';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

const SettingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className='bg-gray-100 p-4 flex gap-6 items-center'>
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
