'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '@/app/(auth)/_components/AuthLayout';
import {
  type LoginForm,
  loginFormSchema,
} from '@/app/(auth)/login/_constants/loginForm';
import { login } from '@/app/(auth)/login/_services/login';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

export const Login = () => {
  const searchParams = useSearchParams();
  const signup = searchParams.get('signup');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onLogin = async (value: LoginForm) => {
    setError('');
    try {
      setIsLoading(true);
      const response = await login(value);
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
    <AuthLayout title='ログイン' error={error}>
      {signup && (
        <p className='mb-10 rounded-sm border border-green-500 bg-green-50 p-2 text-center text-sm text-green-500'>
          メールアドレスの認証が完了しました
        </p>
      )}
      <form onSubmit={handleSubmit(onLogin)} className='space-y-6'>
        <div>
          <p className='text-sm font-bold'>メールアドレス</p>
          <div className='mt-3'>
            <Input {...register('email')} />
          </div>
        </div>
        <div>
          <p className='text-sm font-bold'>パスワード</p>
          <div className='mt-3'>
            <Input {...register('password')} type='password' />
          </div>
        </div>
        <div>
          <Button
            disabled={!isValid || isLoading}
            className='w-full'
            type='submit'
          >
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </Button>
        </div>
        <div className='text-center'>
          <Link href='/signup' className={buttonVariants({ variant: 'link' })}>
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
