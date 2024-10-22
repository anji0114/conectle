'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TLoginForm, loginSchema } from '@/app/(auth)/constants/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/app/(auth)/services/login';
import { AuthTemplate } from '@/app/(auth)/components/AuthTemplate';

export const LoginContents = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TLoginForm>({
    defaultValues: { password: '', email: '' },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(
    async (value: TLoginForm) => {
      setErrorMessage('');
      try {
        await login(value);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage(
            'ログインに失敗しました。再度時間を置いてからお試しください。',
          );
        }
        reset({ password: '' });
      }
    },
    [reset],
  );

  return (
    <AuthTemplate
      errorMessage={errorMessage}
      authType='login'
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
};
