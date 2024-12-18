import { Suspense } from 'react';
import { Loading } from '@/components/ui/Loading';
import { DashboardHeading } from '@/components/view/DashboardHeading';
import { DashboardProjectsList } from '@/features/dashboard/components/DashboardProjectsList';

export const DashboardProjects = () => {
  return (
    <div>
      <DashboardHeading>プロジェクト管理</DashboardHeading>
      <div className='mt-10'>
        <Suspense fallback={<Loading />}>
          <DashboardProjectsList />
        </Suspense>
      </div>
    </div>
  );
};
