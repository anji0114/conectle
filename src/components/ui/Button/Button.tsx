import Link from 'next/link';
import type {
  FC,
  ReactNode,
  HTMLAttributeAnchorTarget,
  MouseEvent,
} from 'react';
import { memo } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  buttonType?: 'dark' | 'blue' | 'red' | 'gray' | 'grayRed' | 'plain';
  buttonSize?: 'xs' | 'sm' | 'base' | 'lg';
  width?: `${number}px` | `${number}%` | 'auto';
  href?: string;
  icon?: ReactNode;
  iconPosition?: 'before' | 'after';
  target?: HTMLAttributeAnchorTarget;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  wrapClassName?: string;
  children: ReactNode;
};

const style = {
  default: 'relative inline-flex justify-center items-center font-bold w-full',
  size: {
    xs: 'px-2 h-6 text-xs rounded',
    sm: 'px-3 pt-[1px] h-8 text-xs rounded-md',
    base: 'px-4 h-10 text-sm rounded-lg',
    lg: 'px-6 h-12 text-sm rounded-lg',
  },
  colors: {
    dark: 'text-white bg-gray-800',
    blue: 'text-white bg-accent',
    red: 'text-white bg-danger',
    gray: 'text-gray-900 bg-gray-200 border border-gray-300',
    grayRed: 'text-danger bg-gray-200 border border-gray-300 ',
    plain: 'bg-white text-gray-900 border border-gray-400',
  },
  disable: 'text-gray-100 bg-gray-400',
};

// buttonの中身
const ButtonContent: FC<
  Omit<
    TButtonProps,
    'onClick' | 'target' | 'href' | 'type' | 'width' | 'wrapClassName'
  >
> = ({
  isLoading,
  buttonSize = 'base',
  buttonType = 'dark',
  iconPosition = 'before',
  icon,
  disabled,
  className,
  children,
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          style.default,
          style.size[buttonSize],
          style.colors[buttonType],
          { [style.disable]: disabled },
          className,
        ),
      )}
    >
      {isLoading && (
        <span className='absolute left-1/2 top-[calc(50%_+_1px)] size-4 -translate-x-1/2  -translate-y-1/2'>
          <span className='inline-block size-full animate-spin rounded-full border-2 border-white border-t-transparent' />
        </span>
      )}
      <span
        className={twMerge(
          clsx(
            isLoading ? 'opacity-0' : '',
            icon ? 'flex items-center gap-2' : '',
          ),
        )}
      >
        {icon && iconPosition === 'before' && (
          <span className='w-4'>{icon}</span>
        )}
        <span className='inline-block'>{children}</span>
        {icon && iconPosition === 'after' && (
          <span className='w-4'>{icon}</span>
        )}
      </span>
    </span>
  );
};

const ButtonComponent: FC<TButtonProps> = ({
  isLoading,
  disabled,
  buttonSize,
  buttonType,
  width = 'auto',
  icon,
  iconPosition,
  href,
  target,
  onClick,
  type = 'button',
  className,
  wrapClassName,
  children,
}) => {
  if (href) {
    return (
      <Link
        className={twMerge(
          clsx(
            disabled || isLoading ? 'pointer-events-none' : '',
            wrapClassName,
          ),
        )}
        href={href}
        target={target}
        style={{ width }}
      >
        <ButtonContent
          isLoading={isLoading}
          buttonSize={buttonSize}
          buttonType={buttonType}
          icon={icon}
          iconPosition={iconPosition}
          disabled={disabled}
          className={className}
        >
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button
      className={twMerge(
        clsx(disabled || isLoading ? 'pointer-events-none' : ''),
        wrapClassName,
      )}
      type={type}
      onClick={onClick ? (event) => onClick(event) : undefined}
      disabled={disabled}
      style={{ width }}
    >
      <ButtonContent
        isLoading={isLoading}
        buttonSize={buttonSize}
        buttonType={buttonType}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        className={className}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

export const Button = memo(ButtonComponent);
