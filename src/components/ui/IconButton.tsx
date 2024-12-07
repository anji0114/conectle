import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

type IconButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof iconButtonStyle>;

const iconButtonStyle = tv({
  base: 'inline-flex items-center justify-center rounded-full border border-transparent p-2',
  variants: {
    variant: {
      base: 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
      ghost: 'text-slate-700 hover:bg-slate-50',
    },
    size: {
      sm: 'size-9',
      base: 'size-10',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
  },
});

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'base', size = 'base', children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={iconButtonStyle({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export { IconButton, iconButtonStyle };
