import { FC, PropsWithChildren } from 'react';

type TInputSectionProps = {
  label: string;
  caution?: string;
} & PropsWithChildren;

export const InputSection: FC<TInputSectionProps> = ({
  label,
  caution,
  children,
}) => {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-4'>
        <p className='font-bold text-sm leading-none'>{label}</p>
        {caution && (
          <p className='text-xs text-gray-700 leading-none'>{caution}</p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
