import { forwardRef, type ComponentProps } from 'react';
import { tv } from 'tailwind-variants';
import { type VariantProps } from 'tailwind-variants';

const inputStyle = tv({
  base: 'w-full outline-offset-4 outline-slate-300',
  variants: {
    variant: {
      outline: 'border border-slate-200',
      fill: 'border border-slate-200 bg-slate-100',
    },
    size: {
      sm: 'h-8 rounded px-3 text-sm',
      base: 'h-10 rounded px-3 text-sm ',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'base',
  },
});

type Props = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputStyle>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ variant = 'outline', size = 'base', className, ...props }, ref) => {
    return (
      <input
        className={inputStyle({ variant, size, className })}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'Input';
