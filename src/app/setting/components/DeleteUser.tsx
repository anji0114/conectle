'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { DeleteUserModal } from './DeleteUserModal';

type TDeleteUserProps = {
  id: string;
};

export const DeleteUser: FC<TDeleteUserProps> = ({ id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='space-y-6 rounded-lg border p-10'>
        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>ユーザーの削除</h2>
          <p>このアクションはやり直すことができません。</p>
        </div>
        <div>
          <Button onClick={() => setOpen(true)}>ユーザーを削除する</Button>
        </div>
      </div>
      <DeleteUserModal id={id} open={open} onCancel={() => setOpen(false)} />
    </div>
  );
};
