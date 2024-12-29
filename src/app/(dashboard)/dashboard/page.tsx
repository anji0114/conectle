import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { DashboardCard } from '@/components/view/DashboardCard';

const DashboardPage = () => {
  return (
    <AuthWrapper>
      <div className='p-10'>
        <h2 className='border-b border-slate-200 pb-4 text-xl font-bold'>
          ダッシュボード
        </h2>
        <div className='mt-10 space-y-2'>
          <DashboardCard
            href='/setting/profile'
            title='プロフィールを編集する'
            text='プロフィールを充実させましょう！'
          />
          <DashboardCard
            href='/projects/new'
            title='新規プロジェクトを作成する'
            text='新規プロジェクトを作成しましょう！'
          />
          <DashboardCard
            href='/dashboard/projects'
            title='プロジェクトを管理する'
            text='プロジェクトを管理しましょう！'
          />
          <DashboardCard
            href='/project/search'
            title='プロジェクトを検索する'
            text='プロジェクトを検索しましょう！'
          />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default DashboardPage;
