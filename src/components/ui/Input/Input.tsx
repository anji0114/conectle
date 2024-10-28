import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type TInputProps = {
  inputType?: 'default' | 'fill';
  inputSize?: 'sm' | 'base' | 'lg';
} & InputHTMLAttributes<HTMLInputElement>;

const inputStyle = {
  type: {
    default: 'border border-gray-400',
    fill: 'bg-gray-200 border border-gray-300',
  },
  size: {
    sm: 'h-[32px] text-sm',
    base: 'h-[40px] text-sm',
    lg: 'h-[48px]',
  },
} as const;

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ inputType = 'default', inputSize = 'base', className, ...rest }, ref) => {
    return (
      <input
        className={twMerge(
          'px-3 rounded-lg outline-none w-full text-gray-800',
          inputStyle.type[inputType],
          inputStyle.size[inputSize],
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
