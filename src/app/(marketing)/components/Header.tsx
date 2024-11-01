import Link from 'next/link';
import { SimpleButton } from '@/components/ui/Button/SimpleButton';

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
          <SimpleButton
            width='120px'
            tag='link'
            href='/login'
            buttonType='plain'
          >
            ログイン
          </SimpleButton>
          <SimpleButton width='120px' tag='link' href='/login'>
            新規登録
          </SimpleButton>
        </div>
      </div>
    </header>
  );
};
