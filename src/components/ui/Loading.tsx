/**
 * @description
 * 読み込み中のスピナー
 */

import type { FC } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '@/libs/cn';

type Props = {
  type?: 'default' | 'absolute' | 'fullScreen';
  className?: string;
};

const wrapStyle = tv({
  base: 'block w-full',
  variants: {
    type: {
      default: 'relative h-6 min-w-6',
      absolute: 'absolute inset-0',
      fullScreen: 'fixed inset-0 z-loading bg-white',
    },
  },
});

export const Loading: FC<Props> = ({ type = 'default', className }) => {
  return (
    <span className={wrapStyle({ type, className })}>
      <span className='absolute left-1/2 top-1/2 block size-6 -translate-x-1/2 -translate-y-1/2'>
        <span
          className={cn(
            'block size-6 animate-spin rounded-full border-[3px] border-cyan-700 border-t-transparent',
          )}
        />
      </span>
    </span>
  );
};
