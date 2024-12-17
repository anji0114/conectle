'use server';

import type { OfferForm } from '@/types/schema/offerForm';
import { createSupabaseServer } from '@/utils/supabase/server';

export const createOffer = async (formValue: OfferForm) => {
  const supabase = createSupabaseServer();

  const { error, data } = await supabase
    .from('offers')
    .insert({
      title: formValue.title,
      contents: formValue.contents,
      project_id: formValue.project_id,
    })
    .select('*')
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data: data };
};
