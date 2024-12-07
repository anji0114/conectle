import { DashboardMenu } from '@/app/dashboard/_components/DashboardMenu';
import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { Container } from '@/components/ui/Container';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <div className='pt-10'>
        <Container className='flex gap-6'>
          <DashboardMenu />
          <div className='flex-1'>{children}</div>
        </Container>
      </div>
    </AuthWrapper>
  );
};

export default DashboardLayout;
