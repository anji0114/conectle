'use client';

import type { FC, PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

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
          className='fixed left-1/2 top-1/2 z-[1001] max-h-[90vh] w-[calc(100%_-_48px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-lg'
          style={{ maxWidth }}
        >
          <div className='space-y-10 p-10'>
            {title && (
              <Dialog.Title
                className={twMerge(
                  'text-xl font-bold leading-none',
                  classes?.title,
                )}
              >
                {title}
              </Dialog.Title>
            )}
            <div>{children}</div>
          </div>
          <button onClick={onCancel} className='absolute right-5 top-5 size-5'>
            <XMarkIcon />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
