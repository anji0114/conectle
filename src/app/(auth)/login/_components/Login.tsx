'use client';

import Link from 'next/link';
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

export const Login = () => {
  const [error, setError] = useState('');
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
    try {
      await login(value);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <AuthLayout title='ログイン' error={error}>
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
            <Input {...register('password')} />
          </div>
        </div>
        <div>
          <Button disabled={!isValid} className='w-full' type='submit'>
            ログイン
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
