'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, TLoginForm } from '@/features/auth/config/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/features/auth/services/login';
import { AuthTemplate } from '@/features/auth/components/AuthTemplate/AuthTemplate';

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
