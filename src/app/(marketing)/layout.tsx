import type { FC, PropsWithChildren } from 'react';
import { Header } from '@/app/(marketing)/_components/Header';

const MarketingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MarketingLayout;
