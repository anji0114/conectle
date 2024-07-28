'use client';

import { Container } from '@/components/ui/Container/Container';
import { useUser } from '@/hooks/useUser';
import { DeleteUser } from '../DeleteUser/DeleteUser';

export const SettingUserContents = () => {
  const { data } = useUser();

  if (!data) return null;

  return (
    <div className='pt-10 pb-16'>
      <Container>
        <div className='space-y-10'>
          <div>{JSON.stringify(data)}</div>
          <DeleteUser id={data.id} />
        </div>
      </Container>
    </div>
  );
};
