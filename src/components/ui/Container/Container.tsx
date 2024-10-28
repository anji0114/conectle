import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type TContainerProps = {
  maxWidth?: `${number}px` | `${number}%` | `${number}vw` | 'auto';
  className?: string;
} & PropsWithChildren;

export const Container: FC<TContainerProps> = ({
  maxWidth = '1096px',
  className,
  children,
}) => {
  return (
    <div className={twMerge(`mx-auto px-6`, className)} style={{ maxWidth }}>
      {children}
    </div>
  );
};
