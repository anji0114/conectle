'use client';

import { DashboardCard } from '@/app/dashboard/_components/DashboardCard';
import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/old/Button';
import { useLogout } from '@/hooks/useLogout';

const DashboardPage = () => {
  const { logout } = useLogout();

  return (
    <AuthWrapper>
      <Container className='py-20'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>ダッシュボード</h2>
          <Button
            variant='outline'
            onClick={() => {
              logout();
            }}
          >
            ログアウト
          </Button>
        </div>
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
    </AuthWrapper>
  );
};

export default DashboardPage;
