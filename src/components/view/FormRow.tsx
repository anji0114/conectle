import type { FC, ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
};

export const FormRow: FC<Props> = ({ label, children }) => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-sm font-bold leading-none'>{label}</p>
      <div className=''>{children}</div>
    </div>
  );
};
