'use client';

import { FC, PropsWithChildren } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/16/solid';

export type TModalProps = {
  open: boolean;
  onCancel: () => void;
  maxWidth?: `${number}px` | `${number}vw` | `${number}%` | `auto`;
  title?: string;
  classes?: {
    title?: string;
  };
} & PropsWithChildren;

export const Modal: FC<TModalProps> = ({
  open,
  onCancel,
  title,
  maxWidth = '688px',
  classes,
  children,
}) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Overlay
        onClick={onCancel}
        className='fixed inset-0 z-[1000] bg-gray-900 opacity-20'
      />
      <Dialog.Portal>
        <Dialog.Content
          className='fixed z-[1001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_48px)] bg-white rounded-2xl shadow-lg max-h-[90vh]'
          style={{ maxWidth }}
        >
          <div className='p-10 space-y-10'>
            {title && (
              <Dialog.Title
                className={twMerge(
                  'font-bold text-xl leading-none',
                  classes?.title,
                )}
              >
                {title}
              </Dialog.Title>
            )}
            <div>{children}</div>
          </div>
          <button onClick={onCancel} className='absolute top-5 right-5 w-5 h-5'>
            <XMarkIcon />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
