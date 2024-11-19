import { DashboardCard } from '@/app/dashboard/_components/DashboardCard';
import { Container } from '@/components/ui/Container';

const DashboardPage = () => {
  return (
    <Container className='py-20'>
      <h2 className='text-2xl font-bold'>ダッシュボード</h2>
      <div className='mt-10 flex flex-wrap gap-4'>
        <DashboardCard
          href='/setting/profile'
          title='プロフィールを編集する'
          text='プロフィールを充実させましょう！'
        />
        <DashboardCard
          href='/project/new'
          title='新規プロジェクトを作成する'
          text='新規プロジェクトを作成しましょう！'
        />
        <DashboardCard
          href='/project/management'
          title='プロジェクトを管理する'
          text='プロジェクトを管理しましょう！'
        />
        <DashboardCard
          href='/project/search'
          title='プロジェクトを検索する'
          text='プロジェクトを検索しましょう！'
        />
      </div>
    </Container>
  );
};

export default DashboardPage;
