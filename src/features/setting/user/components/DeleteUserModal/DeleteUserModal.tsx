'use client';

import { FC, useCallback } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Modal } from '@/components/ui/Modal/Modal';
import { deleteUser } from '../../services/deleteUser';
import { DialogTitle } from '@radix-ui/react-dialog';

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
        <DialogTitle className='font-bold text-xl leading-none text-danger'>
          ユザーの削除
        </DialogTitle>

        <p className='text-sm'>
          削除したデータは復元することができません。
          <br />
          本当によろしいでしょうか？
        </p>
      </div>
      <div className='mt-10 flex justify-end gap-4 mx-[-40px] mb-[-20px] px-10 border-t border-gray-400 pt-5'>
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
