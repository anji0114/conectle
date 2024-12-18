import { Suspense } from 'react';
import { Loading } from '@/components/ui/Loading';
import { DashboardHeading } from '@/components/view/DashboardHeading';

import { DashboardOffers } from '@/features/dashboard/components/DashboardOffers';

const OffersPage = async () => {
  return (
    <div>
      <DashboardHeading>募集管理</DashboardHeading>
      <div className='mt-10'>
        <Suspense fallback={<Loading />}>
          <DashboardOffers />
        </Suspense>
      </div>
    </div>
  );
};

export default OffersPage;
