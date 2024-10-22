'use client';

import { Container } from '@/components/ui/Container/Container';
import { useUser } from '@/hooks/useUser';
import { DeleteUser } from './DeleteUser';
import { UpdateUser } from './UpdateUser';

export const SettingUserContents = () => {
  const { data } = useUser();

  if (!data) return null;

  return (
    <div className='pt-10 pb-16'>
      <Container maxWidth='688px'>
        <div className='space-y-10'>
          <h1 className='text-xl font-bold pt-1 pb-3 pl-4 border-l-4 border-b border-gray-500'>
            ユーザー設定
          </h1>
          <UpdateUser
            username={data.username || ''}
            full_name={data.full_name}
          />
          <DeleteUser id={data.id} />
        </div>
      </Container>
    </div>
  );
};
