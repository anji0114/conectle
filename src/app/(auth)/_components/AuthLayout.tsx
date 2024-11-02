import Link from 'next/link';
import { type FC, type ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 p-10'>
      <div className='text-center'>
        <Link href='/' className='text-3xl font-semibold'>
          Conectle
        </Link>
      </div>
      <div className='mx-auto w-full max-w-[480px] rounded-lg border border-neutral-200 p-10 shadow-sm'>
        <h1 className='text-center text-2xl font-bold'>{title}</h1>
        <div className='mt-8'>{children}</div>
      </div>
    </div>
  );
};
