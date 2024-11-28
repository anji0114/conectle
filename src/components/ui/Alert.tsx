import type { FC } from 'react';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const alertStyle = tv({
  base: 'rounded-md border px-4 py-2 text-center text-sm font-bold',
  variants: {
    type: {
      error: 'border-red-500 text-red-500',
      success: 'border-green-500 text-green-500',
    },
  },
  defaultVariants: {
    type: 'error',
  },
});

type Props = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof alertStyle>;

export const Alert: FC<Props> = ({ children, type, className }) => {
  return <div className={alertStyle({ type, className })}>{children}</div>;
};
