'use client';

import Link from 'next/link';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '@/app/(auth)/_components/AuthLayout';
import {
  type SignupForm,
  signupFormSchema,
} from '@/app/(auth)/signup/_constants/signupForm';
import { signup } from '@/app/(auth)/signup/_services/signup';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
  });
  const [error, setError] = useState<string>('');

  const onSignup = async (value: SignupForm) => {
    setError('');
    try {
      setIsLoading(true);
      const response = await signup(value);
      if (response?.error) {
        setError(response.error);
      }
    } catch (error) {
      console.error(error);
      setError(ERROR_MESSAGE.DEFAULT);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title='新規登録' error={error}>
      <form onSubmit={handleSubmit(onSignup)} className='space-y-6'>
        <div>
          <p className='text-sm font-bold'>メールアドレス</p>
          <div className='mt-3'>
            <Input {...register('email')} />
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>パスワード</p>
          <p className='text-xs'>英数字8文字以上</p>
          <div className='mt-3'>
            <Input {...register('password')} type='password' />
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
            <Button
              className='w-full'
              disabled={!isValid || isLoading}
              type='submit'
            >
              {isLoading ? '新規登録中...' : '新規登録'}
            </Button>
          </div>
          <div className='text-center'>
            <Link href='/login' className={buttonVariants({ variant: 'link' })}>
              既にアカウントをお持ちの方はこちら
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
