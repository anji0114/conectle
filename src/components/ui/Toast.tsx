import type { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as RadixToast from '@radix-ui/react-toast';
import { tv } from 'tailwind-variants';

export type ToastProps = {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: 'success' | 'error';
  duration?: number;
  onOpenChange: (isOpen: boolean) => void;
};

const toastStyle = tv({
  base: 'fixed bottom-10 right-10 z-toast min-w-[300px] max-w-[calc(100vw_-_80px)] rounded-md border bg-white py-5 pl-6 pr-8 shadow-lg',
  variants: {
    variant: {
      success: 'border-sky-200',
      error: 'border-red-200',
    },
  },
});

export const Toast = ({
  isOpen,
  title,
  variant = 'success',
  duration = 5000,
  onOpenChange,
  children,
  className,
}: ToastProps) => {
  return (
    <RadixToast.Root
      className={toastStyle({ variant, className })}
      open={isOpen}
      onOpenChange={onOpenChange}
      duration={duration}
    >
      <button
        className='absolute right-2.5 top-2.5 mt-0 size-4 text-slate-500 hover:text-slate-900'
        onClick={() => onOpenChange(false)}
      >
        <XMarkIcon className='size-4' strokeWidth={2} />
      </button>
      {title && (
        <RadixToast.Title className='mb-1 font-semibold leading-normal'>
          {title}
        </RadixToast.Title>
      )}
      <RadixToast.Description className='text-sm leading-normal text-slate-700'>
        {children}
      </RadixToast.Description>
    </RadixToast.Root>
  );
};
