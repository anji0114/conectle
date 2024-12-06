import type { FC, ReactNode } from 'react';

type Props = {
  label: string;
  caution?: string;
  children: ReactNode;
};

export const FormRow: FC<Props> = ({ label, caution, children }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className=''>
        <p className='text-sm font-bold leading-none'>{label}</p>
        {caution && <span className='text-xs text-red-500'>{caution}</span>}
      </div>
      <div className=''>{children}</div>
    </div>
  );
};
