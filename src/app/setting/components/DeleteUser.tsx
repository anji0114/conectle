'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { DeleteUserModal } from './DeleteUserModal';

type TDeleteUserProps = {
  id: string;
};

export const DeleteUser: FC<TDeleteUserProps> = ({ id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='border border-danger p-10 rounded-lg space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-xl font-bold text-danger'>ユーザーの削除</h2>
          <p>このアクションはやり直すことができません。</p>
        </div>
        <div>
          <Button
            onClick={() => setOpen(true)}
            buttonSize='sm'
            buttonType='grayRed'
          >
            ユーザーを削除する
          </Button>
        </div>
      </div>
      <DeleteUserModal id={id} open={open} onCancel={() => setOpen(false)} />
    </div>
  );
};
