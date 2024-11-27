import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '@/components/ui/old/Button';

export const HeaderLogoutContents = () => {
  return (
    <div className='flex gap-3'>
      <Link
        href='/login'
        className={buttonVariants({ variant: 'outline', size: 'sm' })}
      >
        ログイン
      </Link>
      <Link href='/signup' className={buttonVariants({ size: 'sm' })}>
        新規登録
      </Link>
    </div>
  );
};
