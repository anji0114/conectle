import type { FC, PropsWithChildren } from 'react';
import { Header } from '@/app/(marketing)/components/Header';

const MarketingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MarketingLayout;
