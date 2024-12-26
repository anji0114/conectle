import { Suspense } from 'react';
import { Loading } from '@/components/ui/Loading';
import { DashboardHeading } from '@/components/view/DashboardHeading';
import { DashboardListings } from '@/features/dashboard/components/DashboardListings';

const ListingsPage = async () => {
  return (
    <div>
      <DashboardHeading>募集管理</DashboardHeading>
      <div className='mt-10'>
        <Suspense fallback={<Loading />}>
          <DashboardListings />
        </Suspense>
      </div>
    </div>
  );
};

export default ListingsPage;
