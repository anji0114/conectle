import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

export const Header = () => {
  return (
    <header className='border-b border-gray-200 px-10'>
      <div className='flex h-[72px] items-center justify-between'>
        <h1>
          <Link href='/' className='flex items-center gap-2'>
            <span className='text-3xl font-bold leading-tight'>Conectle</span>
          </Link>
        </h1>
        <div className='flex gap-3'>
          <Link
            href='/login'
            className={buttonVariants({ variant: 'outline' })}
          >
            ログイン
          </Link>
          <Link href='/signup' className={buttonVariants()}>
            新規登録
          </Link>
        </div>
      </div>
    </header>
  );
};
