'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { updateProfile } from '@/app/setting/profile/_actions/updateProfile';
import {
  profileFormSchema,
  type ProfileForm,
} from '@/app/setting/profile/_constants/profileForm';
import { Button } from '@/components/ui/old/Button';
import { Input } from '@/components/ui/old/Input';
import { Textarea } from '@/components/ui/old/Textarea';
import { FormRow } from '@/components/view/FormRow';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { useProfile } from '@/hooks/useProfile';

export const SettingProfile = () => {
  const { data: profile, isLoading: profileLoading, mutate } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: '',
      name: '',
      introduce: '',
    },
  });

  const onSubmit = async (data: ProfileForm) => {
    if (!profile) return;

    setError('');
    setIsLoading(true);
    try {
      const res = await updateProfile(data, profile.username || '');
      if (res.error) {
        setError(res.error);
        return;
      }
      if (!res.data) return;
      mutate((oldData) => ({
        ...oldData,
        ...res.data,
      }));
      alert('更新しました');
    } catch {
      setError(ERROR_MESSAGE.DEFAULT);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isDirty || !profile) return;
    reset({
      username: profile.username || '',
      name: profile.name || '',
      introduce: profile.introduce || '',
    });
  }, [profile, isDirty, reset]);

  if (profileLoading) return <div className='text-center'>Loading...</div>;

  return (
    <div>
      <div className='space-y-6'>
        {error && (
          <p className='border border-destructive p-2 text-center text-sm font-bold text-destructive'>
            {error}
          </p>
        )}
        <FormRow label='ユーザー名'>
          <Input {...register('username')} />
        </FormRow>
        <FormRow label='名前'>
          <Input {...register('name')} />
        </FormRow>
        <FormRow label='紹介文'>
          <Textarea {...register('introduce')} />
        </FormRow>
        <div className='text-center'>
          <Button
            className='w-[160px]'
            disabled={isLoading || !isValid}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? '更新中...' : '更新'}
          </Button>
        </div>
      </div>
    </div>
  );
};
