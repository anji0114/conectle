'use server';

import { revalidatePath } from 'next/cache';
import type { ListingFormType } from '@/types/schema/listingForm';
import { createSupabaseServer } from '@/utils/supabase/server';

export const createListing = async (
  formValue: ListingFormType,
  userId: string,
) => {
  const supabase = createSupabaseServer();

  const { error, data } = await supabase
    .from('listings')
    .insert({
      title: formValue.title,
      contents: formValue.contents,
      project_id: formValue.project_id,
      user_id: userId,
    })
    .select('*')
    .single();

  if (error) {
    return { error: error.message };
  }
  revalidatePath('/dashboard/listings');

  return { data: data };
};
