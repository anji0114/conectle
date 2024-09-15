import { FC, PropsWithChildren } from 'react';
import { Header } from './layouts/Header/Header';

const MarketingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MarketingLayout;
