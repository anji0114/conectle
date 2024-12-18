import Link, { type LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const linkTextStyle = tv({
  base: 'text-sm',
  variants: {
    variant: {
      underline: 'underline underline-offset-4 hover:text-sky-600',
      bold: 'font-bold hover:text-sky-600',
    },
  },
});

type Props = LinkProps & {
  className?: string;
  target?: HTMLAnchorElement['target'];
} & PropsWithChildren &
  VariantProps<typeof linkTextStyle>;

export const LinkText = forwardRef<HTMLAnchorElement, Props>(
  ({ className, variant = 'underline', ...props }, ref) => {
    return (
      <Link
        className={linkTextStyle({ variant, className })}
        {...props}
        ref={ref}
      />
    );
  },
);

LinkText.displayName = 'LinkText';
