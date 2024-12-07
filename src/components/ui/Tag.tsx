import type { ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type Props = {
  className?: string;
  children: ReactNode;
} & VariantProps<typeof tagStyle>;

export const tagStyle = tv({
  base: 'inline-block',
  variants: {
    variant: {
      base: 'border border-slate-200',
    },
    size: {
      sm: 'rounded-sm px-2 py-1 text-xs',
      base: 'rounded-md px-3 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'base',
  },
});

export const Tag = ({
  className,
  children,
  variant = 'base',
  size = 'base',
}: Props) => {
  return (
    <span className={tagStyle({ variant, size, className })}>{children}</span>
  );
};
