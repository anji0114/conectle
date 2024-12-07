import Link from 'next/link';
import type { FC } from 'react';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

type Props = {
  href: string;
  title: string;
  text: string;
};

export const DashboardCard: FC<Props> = ({ href, title, text }) => {
  return (
    <div className='relative flex border border-slate-200 p-6 transition-colors duration-300 hover:border-slate-500'>
      <Link href={href} className='absolute inset-0' />
      <div className='flex-1'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='mt-2 text-sm text-slate-500'>{text}</p>
      </div>
      <ArrowRightIcon className='w-4' />
    </div>
  );
};
