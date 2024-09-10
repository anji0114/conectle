'use client';

import { FC, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { InputSection } from '@/features/auth/components/InputSection/InputSection';
import {
  TUserUpdateFormData,
  userUpdateSchema,
} from '../../configs/userUpdateForm';
import { zodResolver } from '@hookform/resolvers/zod';

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
    <div className='border border-gray-400 p-10 rounded-lg'>
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
