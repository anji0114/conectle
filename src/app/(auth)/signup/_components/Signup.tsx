import Link from 'next/link';
import { AuthLayout } from '@/app/(auth)/_components/AuthLayout';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const Signup = () => {
  return (
    <AuthLayout title='新規登録'>
      <div className='space-y-6'>
        <div>
          <p className='text-sm font-bold'>ユーザーネーム</p>
          <p className='text-xs'>半角英数字</p>
          <div className='mt-3'>
            <Input />
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>メールアドレス</p>
          <div className='mt-3'>
            <Input />
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>パスワード</p>
          <p className='text-xs'>英数字8文字以上</p>
          <div className='mt-3'>
            <Input />
          </div>
        </div>
        <div className='space-y-4'>
          <p className='text-sm'>
            会員登録することで、
            <Link
              href='/terms'
              target='_blank'
              className='underline underline-offset-4 hover:opacity-90'
            >
              利用規約
            </Link>
            ・
            <Link
              href='/privacy'
              target='_blank'
              className='underline underline-offset-4 hover:opacity-90'
            >
              プライバシーポリシー
            </Link>
            に同意したとみなします
          </p>
          <div>
            <Button className='w-full'>新規登録</Button>
          </div>
          <div className='text-center'>
            <Link href='/login' className={buttonVariants({ variant: 'link' })}>
              既にアカウントをお持ちの方はこちら
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
