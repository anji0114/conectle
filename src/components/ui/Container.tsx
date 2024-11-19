import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/libs/cn';

type TContainerProps = {
  maxWidth?: `${number}px` | `${number}%` | `${number}vw` | 'auto';
  className?: string;
} & PropsWithChildren;

export const Container: FC<TContainerProps> = ({
  maxWidth = '1104px',
  className,
  children,
}) => {
  return (
    <div className={cn(`mx-auto px-10`, className)} style={{ maxWidth }}>
      {children}
    </div>
  );
};
