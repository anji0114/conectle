import { Container } from '@/components/ui/Container';
import { ProjectsList } from '@/features/projects/public/components/ProjectsList';

export const ProjectsPageTemplate = () => {
  return (
    <div className='py-20'>
      <Container>
        <h1 className='text-2xl font-bold'>プロジェクト一覧</h1>
        <ProjectsList />
      </Container>
    </div>
  );
};
