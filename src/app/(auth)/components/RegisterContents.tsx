'use client';

import { useCallback, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthTemplate } from '@/app/(auth)/components/AuthTemplate';
import type { TRegisterForm } from '@/app/(auth)/constants/authSchema';
import { registerSchema } from '@/app/(auth)/constants/authSchema';
import { register as signup } from '@/app/(auth)/services/register';

export const RegisterContents = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TRegisterForm>({
    defaultValues: { password: '', email: '', username: '' },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = useCallback(
    async (value: TRegisterForm) => {
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
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
      authType='register'
      register={register}
    />
  );
};
