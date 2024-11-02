import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

const TopPage = () => {
  return (
    <div>
      <div className='flex h-[calc(100vh_-_72px)] min-h-[400px] flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-bold leading-tight text-primary'>
          誰かの個人開発にジョインする
        </h1>
        <div className='flex justify-center gap-2'>
          <Link
            href='/login'
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'w-[140px]',
            })}
          >
            ログイン
          </Link>

          <Link
            href='/signup'
            className={buttonVariants({ size: 'lg', className: 'w-[140px]' })}
          >
            新規登録
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
