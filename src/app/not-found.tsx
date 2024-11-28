import Link from 'next/link';
import { buttonStyle } from '@/components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className='flex min-h-[calc(100vh_-_65px)] flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <div className='mt-4'>
        <Link href='/' className={buttonStyle({ variant: 'outline' })}>
          トップページへ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
