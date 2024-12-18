import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { Container } from '@/components/ui/Container';
import { DashboardMenu } from '@/components/view/DashboardMenu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <div className='pt-10'>
        <Container className='flex gap-10'>
          <DashboardMenu />
          <div className='flex-1'>{children}</div>
        </Container>
      </div>
    </AuthWrapper>
  );
};

export default DashboardLayout;
