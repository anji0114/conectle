import Link from 'next/link';
import { AuthLayout } from '@/app/(auth)/_components/AuthLayout';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const Login = () => {
  return (
    <AuthLayout title='ログイン'>
      <div className='space-y-6'>
        <div>
          <p className='text-sm font-bold'>メールアドレス</p>
          <div className='mt-3'>
            <Input />
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>パスワード</p>
          <div className='mt-3'>
            <Input />
          </div>
        </div>
        <div>
          <Button className='w-full'>ログイン</Button>
        </div>
        <div className='text-center'>
          <Link href='/signup' className={buttonVariants({ variant: 'link' })}>
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
