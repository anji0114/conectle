import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <p>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          トップページへ
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
