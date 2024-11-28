import Link from 'next/link';
import React from 'react';
import { buttonStyle } from '@/components/ui/Button';

export const HeaderLogoutContents = () => {
  return (
    <div className='flex gap-3'>
      <Link
        href='/login'
        className={buttonStyle({ variant: 'outline', size: 'sm' })}
      >
        ログイン
      </Link>
      <Link href='/signup' className={buttonStyle({ size: 'sm' })}>
        新規登録
      </Link>
    </div>
  );
};
