import Link from 'next/link';
import { forwardRef, type PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';
import type {
  ButtonOrLinkProps,
  ButtonOrLinkPropsElement,
} from '@/types/buttonOrLinkProps';
import { type SizeProps } from '@/types/sizeProps';

type Props = {
  buttonSize?: 'sm' | 'base' | 'lg';
  buttonType?: 'base' | 'primary' | 'attention' | 'plain';
  className?: string;
  disable?: boolean;
  width?: SizeProps;
} & PropsWithChildren &
  ButtonOrLinkProps;

const buttonStyle = tv({
  base: 'inline-flex max-w-full items-center justify-center leading-none',
  variants: {
    buttonSize: {
      sm: 'h-8 rounded px-3 text-xs',
      base: 'h-10 rounded px-4 text-sm',
      lg: 'h-12 rounded-lg px-5',
    },
    buttonType: {
      base: 'bg-base-1000 font-semibold text-white hover:bg-base-900',
      primary: '',
      attention: '',
      plain: 'border border-base-300 bg-white font-semibold hover:bg-base-100',
    },
    disable: {
      true: '',
      false: '',
    },
  },
});

export const SimpleButton = forwardRef<
  ButtonOrLinkPropsElement<Props['tag']>,
  Props
>(
  (
    {
      buttonSize = 'base',
      buttonType = 'base',
      disable = false,
      width = 'auto',
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    if (rest.tag === 'link') {
      return (
        <Link
          ref={ref as ButtonOrLinkPropsElement<'link'>}
          className={buttonStyle({
            buttonSize,
            buttonType,
            disable,
            className,
          })}
          style={{ width }}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    if (rest.tag === 'button') {
      return (
        <button
          ref={ref as ButtonOrLinkPropsElement<'button'>}
          className={buttonStyle({
            buttonSize,
            buttonType,
            disable,
            className,
          })}
          style={{ width }}
          {...rest}
        >
          {children}
        </button>
      );
    }

    if (rest.tag === 'span') {
      return (
        <span
          className={buttonStyle({
            buttonSize,
            buttonType,
            disable,
            className,
          })}
          style={{ width }}
          ref={ref as ButtonOrLinkPropsElement<'span'>}
          {...rest}
        >
          {children}
        </span>
      );
    }

    return null;
  },
);

SimpleButton.displayName = 'SimpleButton';
