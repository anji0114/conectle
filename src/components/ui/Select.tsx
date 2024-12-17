import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { tv } from 'tailwind-variants';
import { cn } from '@/libs/cn';
import type { VariantProps } from 'tailwind-variants';

const selectStyle = tv({
  base: 'w-full appearance-none border border-transparent outline-offset-4 outline-slate-300',
  variants: {
    variant: {
      fill: 'border-slate-200  bg-slate-100',
      outline: 'border-slate-200',
    },
    size: {
      sm: 'h-8 rounded px-3 text-sm',
      base: 'h-10 rounded px-3 text-sm',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'base',
  },
});

type SelectProps = VariantProps<typeof selectStyle> & {
  wrapClassName?: string;
} & Omit<ComponentProps<'select'>, 'size'>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { variant = 'outline', size = 'base', wrapClassName, className, ...props },
    ref,
  ) => {
    return (
      <div className={cn('relative', wrapClassName)}>
        <select
          className={selectStyle({ variant, size, className })}
          ref={ref}
          {...props}
        />
        <ChevronDownIcon className='absolute right-3 top-1/2 size-4 -translate-y-1/2' />
      </div>
    );
  },
);

Select.displayName = 'Select';
