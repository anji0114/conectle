'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { initProfile } from '@/app/(auth)/signup/init/_actions/initProfile';
import {
  initProfileFormSchema,
  type InitProfileForm,
} from '@/app/(auth)/signup/init/constants/initProfileForm';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { FormRow } from '@/components/view/FormRow';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { rootUrl } from '@/constants/url';
import { useProfile } from '@/hooks/useProfile';

export const InitContents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { data: profile, isLoading: profileIsLoading, mutate } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<InitProfileForm>({
    resolver: zodResolver(initProfileFormSchema),
    defaultValues: {
      username: '',
      name: '',
    },
  });

  const onSubmit = async (data: InitProfileForm) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await initProfile(data);
      if (response.error) {
        setError(response.error);
        return;
      }
      mutate((oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          username: data.username,
          name: data.name,
        };
      }, false);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      setError(ERROR_MESSAGE.DEFAULT);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (profile && profile.username && !isValid) {
      router.push('/dashboard');
    }
  }, [profile, router, isValid]);

  if (profileIsLoading) {
    return (
      <div className='flex min-h-[calc(100vh_-_73px)] items-center justify-center bg-gradient-to-bl from-blue-600/5 to-white py-20'>
        Loading...
      </div>
    );
  }

  return (
    <div className='min-h-[calc(100vh_-_73px)] bg-gradient-to-bl from-blue-600/5 to-white py-20'>
      <Container maxWidth='540px' className='w-full'>
        <h2 className='text-2xl font-bold'>初期設定</h2>
        {error && (
          <Alert type='error' className='mt-6 bg-white'>
            {error}
          </Alert>
        )}
        <div className='mt-10 space-y-6'>
          <FormRow label='ユーザー名' caution='半角英数字4文字以上'>
            <div className='flex items-center gap-4'>
              <p className='text-sm'>{rootUrl}/</p>
              <Input placeholder='conectle' {...register('username')} />
            </div>
          </FormRow>
          <FormRow label='表示名'>
            <Input placeholder='開発 太郎' {...register('name')} />
          </FormRow>
          <div className='text-center'>
            <Button
              disabled={isLoading || !isValid}
              className='w-[120px]'
              onClick={handleSubmit(onSubmit)}
            >
              {isLoading ? '登録中...' : '登録'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
