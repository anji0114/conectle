import { DashboardListingItem } from '@/features/dashboard/components/DashboardListingItem';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

export const DashboardListings = async () => {
  const supabase = createSupabaseServer();
  const user = await getUser();

  const { data: listings, error } = await supabase
    .from('listings')
    .select('*')
    .eq('user_id', user.id);

  if (error || !listings) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {listings.map((listing) => (
        <DashboardListingItem key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
