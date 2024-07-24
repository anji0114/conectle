'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authSchema, TAuthForm } from '@/features/auth/config/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthTemplate } from '@/features/auth/components/AuthTemplate/AuthTemplate';
import { register as signup } from '@/features/auth/services/register';

export const RegisterContents = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TAuthForm>({
    defaultValues: { password: '', email: '' },
    resolver: zodResolver(authSchema),
  });

  const onSubmit = useCallback(
    async (value: TAuthForm) => {
      setErrorMessage('');
      try {
        await signup(value);
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
      authType='register'
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
};
