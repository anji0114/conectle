import type { ReactNode } from 'react';
import { SettingMenu } from '@/app/setting/_components/SettingMenu';
import { AuthWrapper } from '@/components/functional/AuthWrapper';
import { Container } from '@/components/ui/Container';

const SettingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthWrapper>
      <div className='pb-20 pt-12'>
        <Container maxWidth='880px'>
          <h2 className='text-2xl font-bold'>設定</h2>
          <div className='mt-10 flex gap-12'>
            <div className='w-[240px]'>
              <SettingMenu />
            </div>
            <div className='flex-1'>{children}</div>
          </div>
        </Container>
      </div>
    </AuthWrapper>
  );
};

export default SettingLayout;
