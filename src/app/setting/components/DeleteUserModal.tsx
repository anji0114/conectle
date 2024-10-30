'use client';

import type { FC } from 'react';
import { useCallback } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { deleteUser } from '@//app/setting/services/deleteUser';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal/Modal';

type TDeleteUserModalProps = {
  open: boolean;
  onCancel: () => void;
  id: string;
};

export const DeleteUserModal: FC<TDeleteUserModalProps> = ({
  id,
  open,
  onCancel,
}) => {
  const onDeleteUser = useCallback(async () => {
    try {
      deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Modal open={open} onCancel={onCancel} maxWidth='540px'>
      <div className='space-y-4'>
        <DialogTitle className='text-danger text-xl font-bold leading-none'>
          ユザーの削除
        </DialogTitle>

        <p className='text-sm'>
          削除したデータは復元することができません。
          <br />
          本当によろしいでしょうか？
        </p>
      </div>
      <div className='mx-[-40px] mb-[-20px] mt-10 flex justify-end gap-4 border-t border-gray-400 px-10 pt-5'>
        <Button buttonSize='sm' buttonType='dark' onClick={onCancel}>
          キャンセル
        </Button>
        <Button buttonSize='sm' buttonType='grayRed' onClick={onDeleteUser}>
          削除する
        </Button>
      </div>
    </Modal>
  );
};
