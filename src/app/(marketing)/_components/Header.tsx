import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/libs/cn';
import { createClient } from '@/utils/supabase/server';

export const Header = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className='border-b border-gray-200 px-10'>
      <div className='flex h-[72px] items-center justify-between'>
        <h1>
          <Link href='/' className='flex items-center gap-2'>
            <span className='text-3xl font-bold leading-tight'>Conectle</span>
          </Link>
        </h1>
        <div className='flex gap-3'>
          {!user ? (
            <>
              <Link
                href='/login'
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
              >
                ログイン
              </Link>
              <Link href='/signup' className={buttonVariants({ size: 'sm' })}>
                新規登録
              </Link>
            </>
          ) : (
            <Link
              href='/dashboard'
              className={cn(
                buttonVariants({ size: 'sm' }),
                'w-[140px] text-xs',
              )}
            >
              ダッシュボードへ
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
