import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FormRow } from '@/components/view/FormRow';

export const SettingMailPageTemplate = () => {
  return (
    <div className='pb-10'>
      <h2 className='border-b border-slate-200 pb-4 text-xl font-bold'>
        メール設定
      </h2>
      <div className='mt-10 space-y-6'>
        <FormRow label='現在のメールアドレス'>
          <Input
            variant='outline'
            value='anji.tnk.140114@gmail.com'
            className='w-full'
            disabled
          />
        </FormRow>
        <FormRow label='新たに設定するメールアドレス'>
          <Input variant='fill' />
        </FormRow>
        <div className='text-center'>
          <Button className='w-[160px]'>変更</Button>
        </div>
      </div>
    </div>
  );
};
