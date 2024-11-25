import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

const SignupWelcomePage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-bold'>
        Conectleにご登録いただきありがとうございます！
      </h1>
      <p>世界中の個人開発者と繋がり、共に成長していきましょう。</p>
      <div className=''>
        <Link className={buttonVariants()} href='/login'>
          ログインする
        </Link>
      </div>
    </div>
  );
};

export default SignupWelcomePage;
