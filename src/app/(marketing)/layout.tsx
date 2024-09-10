import { FC, PropsWithChildren } from 'react';
import { MarketingLayout as MarketingLayoutComponent } from '@/components/layouts/MarketingLayout/MarketingLayout';

const MarketingLayout: FC<PropsWithChildren> = ({ children }) => {
  return <MarketingLayoutComponent>{children}</MarketingLayoutComponent>;
};

export default MarketingLayout;
