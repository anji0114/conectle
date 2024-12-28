import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonStyle = tv({
  base: 'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300',
  variants: {
    variant: {
      base: 'bg-sky-500 text-white hover:bg-sky-600',
      outline: 'border border-slate-200 bg-white hover:bg-slate-100',
      link: 'underline underline-offset-4 hover:text-sky-600',
    },
    size: {
      sm: 'h-9 rounded px-3 text-sm',
      base: 'h-10 rounded-md px-4 text-sm ',
      lg: '',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'base',
    disabled: false,
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'base', variant = 'base', disabled, className, ...props }, ref) => {
    return (
      <button
        className={buttonStyle({ size, variant, disabled, className })}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
export { Button, buttonStyle, type ButtonProps };
