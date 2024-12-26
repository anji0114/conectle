'use server';

import { revalidatePath } from 'next/cache';
import type { ListingFormType } from '@/types/schema/listingForm';
import { createSupabaseServer } from '@/utils/supabase/server';

export const updateListing = async (
  formData: ListingFormType,
  listingId: string,
) => {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase
    .from('listings')
    .update(formData)
    .eq('id', listingId)
    .select('*')
    .single();

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/dashboard/listings');
  revalidatePath(`/listings/${listingId}/edit`);

  return {
    data,
  };
};
