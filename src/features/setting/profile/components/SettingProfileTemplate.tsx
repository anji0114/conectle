'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/functional/ToastProvider';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { FormRow } from '@/components/view/FormRow';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { SettingProfileLinks } from '@/features/setting/profile/components/SettingProfileLinks';
import {
  profileFormSchema,
  type ProfileForm,
} from '@/features/setting/profile/constants/profileForm';
import { updateProfile } from '@/features/setting/profile/services/updateProfile';
import { useProfile } from '@/hooks/useProfile';

export const SettingProfileTemplate = () => {
  const { data: profile, isLoading: profileLoading, mutate } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const { openToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
    control,
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: '',
      name: '',
      introduce: '',
      links: [{ url: '', name: '' }],
    },
  });

  const onSubmit = async (data: ProfileForm) => {
    if (!profile) return;

    setError('');
    setIsLoading(true);
    try {
      const res = await updateProfile(data);
      if (res.error) {
        setError(res.error);
        return;
      }
      if (!res.data) return;
      mutate((oldData) => ({
        ...oldData,
        ...res.data,
      }));
      openToast({
        variant: 'success',
        children: 'プロフィールを更新しました',
      });
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
      links: profile.links.map((link) => ({
        url: link.url || '',
        name: link.name || '',
      })) || [{ url: '', name: '' }],
    });
  }, [profile, isDirty, reset]);

  if (profileLoading) return <div className='text-center'>Loading...</div>;

  return (
    <div className='pb-10'>
      <h2 className='border-b border-slate-200 pb-4 text-xl font-bold'>
        プロフィール編集
      </h2>
      <div className='mt-10 space-y-6'>
        {error && <Alert type='error'>{error}</Alert>}
        <FormRow label='ユーザー名'>
          <Input variant='fill' {...register('username')} />
        </FormRow>
        <FormRow label='名前'>
          <Input variant='fill' {...register('name')} />
        </FormRow>
        <FormRow label='紹介文'>
          <Textarea
            variant='fill'
            className='resize-none'
            {...register('introduce')}
          />
        </FormRow>
        <FormRow label='関連リンク'>
          <SettingProfileLinks control={control} />
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
