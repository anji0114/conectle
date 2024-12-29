import Link from 'next/link';
import { Suspense } from 'react';

import { buttonStyle } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Loading } from '@/components/ui/Loading';
import { DashboardListings } from '@/features/dashboard/components/DashboardListings';

const ListingsPage = async () => {
  return (
    <Container>
      <div>
        <Suspense fallback={<Loading />}>
          <DashboardListings />
        </Suspense>
      </div>
      <div className='mt-10'>
        <Link
          href='/dashboard/listings/create'
          className={buttonStyle({ className: 'w-full' })}
        >
          募集を作成する
        </Link>
      </div>
    </Container>
  );
};

export default ListingsPage;
