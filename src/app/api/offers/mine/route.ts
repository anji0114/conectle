import { NextResponse } from 'next/server';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

export const GET = async () => {
  const supabase = createSupabaseServer();
  const user = await getUser();

  const { data: offers, error } = await supabase
    .from('offers')
    .select('*, projects(*)')
    .eq('projects.user_id', user.id);

  if (error || !offers) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: offers });
};
