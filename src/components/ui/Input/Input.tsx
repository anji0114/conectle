import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TInputProps = {
  inputType?: 'default' | 'fill';
  inputSize?: 'sm' | 'base' | 'lg';
} & InputHTMLAttributes<HTMLInputElement>;

const inputStyle = {
  type: {
    default: 'border border-gray-300',
    fill: 'bg-gray-100',
  },
  size: {
    sm: 'h-[32px] px-3',
    base: 'h-[40px] px-4 text-sm',
    lg: 'h-[48px] px-4',
  },
} as const;

export const Input: FC<TInputProps> = ({
  inputType = 'default',
  inputSize = 'base',
  className,
  ...rest
}) => {
  return (
    <input
      className={twMerge(
        'rounded-lg outline-none w-full text-gray-800',
        inputStyle.type[inputType],
        inputStyle.size[inputSize],
        className,
      )}
      {...rest}
    />
  );
};
