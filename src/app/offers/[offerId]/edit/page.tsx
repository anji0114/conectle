import { notFound } from 'next/navigation';
import { OfferEdit } from '@/features/offers/components/OfferEdit';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

type Params = {
  offerId: string;
};

const OfferEditPage = async ({ params }: { params: Params }) => {
  const supabase = createSupabaseServer();
  const user = await getUser();

  const { data: offer, error } = await supabase
    .from('offers')
    .select('*, projects(user_id)')
    .eq('id', params.offerId)
    .eq('projects.user_id', user.id)
    .single();

  if (!offer || error) {
    return notFound();
  }

  return <OfferEdit offer={offer} />;
};

export default OfferEditPage;
