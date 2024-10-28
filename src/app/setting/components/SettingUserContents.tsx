'use client';

import { Container } from '@/components/ui/Container/Container';
import { useUser } from '@/hooks/useUser';
import { DeleteUser } from './DeleteUser';
import { UpdateUser } from './UpdateUser';

export const SettingUserContents = () => {
  const { data } = useUser();

  if (!data) return null;

  return (
    <div className='pb-16 pt-10'>
      <Container maxWidth='688px'>
        <div className='space-y-10'>
          <h1 className='border-b border-l-4 border-gray-500 pb-3 pl-4 pt-1 text-xl font-bold'>
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
