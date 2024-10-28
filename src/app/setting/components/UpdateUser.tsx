'use client';

import type { FC } from 'react';
import { useCallback, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { TUserUpdateFormData } from '@//app/setting/constants/userUpdateForm';
import { userUpdateSchema } from '@//app/setting/constants/userUpdateForm';
import { InputSection } from '@/app/(auth)/components/InputSection';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';

type TUpdateUserProps = {
  username: string;
  full_name: string;
};

export const UpdateUser: FC<TUpdateUserProps> = ({ username, full_name }) => {
  const {
    handleSubmit,
    register,
    formState: { isValid, isDirty },
    reset,
  } = useForm<TUserUpdateFormData>({
    defaultValues: { username: '', full_name: '' },
    resolver: zodResolver(userUpdateSchema),
  });

  const onSave = useCallback(async (value: TUserUpdateFormData) => {
    console.log(value);
  }, []);

  useEffect(() => {
    if (isDirty) return;
    reset({ username, full_name });
  }, [reset, isDirty, username, full_name]);

  return (
    <div className='rounded-lg border border-gray-400 p-10'>
      <div>
        <h2 className='text-xl font-bold'>ユーザー情報編集</h2>
        <div className='mt-10 space-y-10'>
          <InputSection label='ユーザーネーム' caution='半角英数字4文字以上'>
            <Input inputType='fill' {...register('username')} />
          </InputSection>
          <InputSection label='名前'>
            <Input inputType='fill' {...register('full_name')} />
          </InputSection>
          <div className='text-right'>
            <Button
              buttonType='blue'
              width='120px'
              disabled={!isValid}
              onClick={handleSubmit(onSave)}
            >
              保存する
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
