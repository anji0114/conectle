import { type ReactNode, type FC } from 'react';
import { cn } from '@/libs/cn';

type Props = {
  children: ReactNode;
  className?: string;
  subChildren?: ReactNode;
};

export const DashboardHeading: FC<Props> = ({
  children,
  className,
  subChildren,
}) => {
  return (
    <div className={cn('border-b border-slate-200 pb-4', className)}>
      <h2 className='flex-1 text-xl font-bold'>{children}</h2>
      {subChildren}
    </div>
  );
};
