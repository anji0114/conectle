import { notFound } from 'next/navigation';
import { ListingEdit } from '@/features/listings/components/ListingEdit';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

type Params = {
  listingId: string;
};

const ListingEditPage = async ({ params }: { params: Params }) => {
  const supabase = createSupabaseServer();
  const user = await getUser();

  const { data: listing, error } = await supabase
    .from('listings')
    .select('*, projects(user_id)')
    .eq('id', params.listingId)
    .eq('projects.user_id', user.id)
    .single();

  if (!listing || error) {
    return notFound();
  }

  return <ListingEdit userId={user.id} listing={listing} />;
};

export default ListingEditPage;
