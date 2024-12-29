import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { DashboardMenu } from '@/components/view/DashboardMenu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <div className='flex min-h-[calc(100vh_-_64px)] bg-slate-50'>
        <DashboardMenu />
        <div className='flex-1'>{children}</div>
      </div>
    </AuthWrapper>
  );
};

export default DashboardLayout;
