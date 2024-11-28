import Link, { type LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/libs/cn';

type Props = LinkProps & {
  className?: string;
  target?: HTMLAnchorElement['target'];
} & PropsWithChildren;

export const LinkText = forwardRef<HTMLAnchorElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        className={cn(
          'text-sm underline underline-offset-4 hover:text-sky-600',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

LinkText.displayName = 'LinkText';
