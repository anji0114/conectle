import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { Container } from '@/components/ui/Container';

const ProjectNewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <div className='min-h-[calc(100vh_-_65px)] bg-slate-50 py-10'>
        <Container>
          <div>
            <Link
              href='/dashboard/projects'
              className='flex w-fit items-center gap-2 text-slate-500 hover:text-slate-800'
            >
              <ArrowLeftIcon className='size-3' strokeWidth={2} />
              <span className='text-sm'>オファー一覧へ</span>
            </Link>
          </div>
          <div className='mt-6'>{children}</div>
        </Container>
      </div>
    </AuthWrapper>
  );
};

export default ProjectNewLayout;
