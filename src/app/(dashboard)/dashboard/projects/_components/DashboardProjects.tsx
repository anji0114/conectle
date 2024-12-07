import { Suspense } from 'react';
import { DashboardHeading } from '@/app/(dashboard)/_components/DashboardHeading';
import { Projects } from '@/app/(dashboard)/dashboard/projects/_components/Projects';
import { Loading } from '@/components/ui/Loading';

export const DashboardProjects = () => {
  return (
    <div>
      <DashboardHeading>プロジェクト管理</DashboardHeading>
      <div className='mt-10'>
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </div>
    </div>
  );
};
