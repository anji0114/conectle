import { DashboardOfferItem } from '@/features/dashbaord/components/DashboardOfferItem';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

export const DashboardOffers = async () => {
  const supabase = createSupabaseServer();
  const user = await getUser();

  const { data: offers, error } = await supabase
    .from('offers')
    .select('*, projects(*)')
    .eq('projects.user_id', user.id);

  if (error || !offers) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {offers.map((offer) => (
        <DashboardOfferItem key={offer.id} offer={offer} />
      ))}
    </div>
  );
};
