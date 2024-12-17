'use server';

import { revalidatePath } from 'next/cache';
import type { OfferFormType } from '@/types/schema/offerForm';
import { createSupabaseServer } from '@/utils/supabase/server';

export const updateOffer = async (formData: OfferFormType, offerId: string) => {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from('offers')
    .update(formData)
    .eq('id', offerId)
    .select('*')
    .single();

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/dashboard/offers');
  revalidatePath(`/offers/${offerId}/edit`);

  return {
    data,
  };
};
