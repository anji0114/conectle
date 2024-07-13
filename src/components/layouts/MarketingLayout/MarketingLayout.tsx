import { FC, PropsWithChildren } from 'react';
import { HeaderLink } from './HeaderLink/HeaderLink';

export const MarketingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-svh'>
      <header className='px-6 py-4 border-b border-b-gray-300'>
        <div className='flex justify-center items-center gap-6'>
          <HeaderLink href='/' text='トップページ' />
          <HeaderLink href='/projects' text='プロジェクト一覧' />
          <HeaderLink href='/login' text='ログイン' />
        </div>
      </header>
      {children}
    </div>
  );
};
