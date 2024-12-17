import { Suspense } from 'react';
import { DashboardHeading } from '@/app/(dashboard)/_components/DashboardHeading';

import { Loading } from '@/components/ui/Loading';
import { DashboardOffers } from '@/features/dashbaord/components/DashboardOffers';

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
