'use client';

import { useLogout } from '@/hooks/useLogout';

export const CheckLoginContents = () => {
  const { logout } = useLogout();
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
      <p className='text-2xl font-bold'>ログインしています</p>
      <button onClick={() => logout()} className='border'>
        ログアウト
      </button>
    </div>
  );
};
