import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='border-b border-gray-300 px-10'>
      <div className='flex h-14 items-center justify-between'>
        <h1>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/images/common/logo-black.svg'
              width={40}
              height={40}
              alt=''
            />
            <span className='text-sm font-bold leading-tight'>
              個人開発を
              <br />
              サポートするアプリ
            </span>
          </Link>
        </h1>
        <div className='flex gap-4'>
          <Link href='/login'>ログイン</Link>
          <Link href='/register'>会員登録</Link>
        </div>
      </div>
    </div>
  );
};
